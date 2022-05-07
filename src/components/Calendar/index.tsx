import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useDispatch, useSelector } from "react-redux";

import { Modal } from "../Modal";
import { statusColor } from "./utils";
import {
  addEvent,
  removeEvent,
  removeSelectedEvent,
  selectEvent,
  updateEvent,
} from "../../redux/events/actions";
import { filteredEventsSelector } from "../../redux/events/selectors";
import { EventType } from "../../types/event";
import { EventForm } from "../EventForm";
import { Button } from "../ui/Button";
import { Container, HeaderContainer, inlineStyles } from "./styles";
import { Title } from "../ui/Text";
import { signOut } from "../../redux/auth/actions";

export default function Calendar() {
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const calendarRef = useRef<FullCalendar>();
  const dispatch = useDispatch();
  const filteredEvents = useSelector(filteredEventsSelector);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const closeModal = () => {
    setOpen(false);
    dispatch(removeSelectedEvent());
  };

  useEffect(() => {
    setCalendarEvents(
      filteredEvents.map((event) => {
        return {
          id: event.id,
          title: event.title,
          start: event.start_time,
          end: event.end_time,
          color: statusColor[event.status],
        };
      })
    );
  }, [filteredEvents]);

  const handleEventClick = ({ event }) => {
    setOpen(true);
    dispatch(selectEvent({ event }.event.id));
  };

  const onEventAdded = (event) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(event);
    dispatch(addEvent(event));
    closeModal();
  };

  const onEventUpdated = (event) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.addEvent(event);
    dispatch(updateEvent(event));
    closeModal();
  };

  const onEventDeleted = (eventId) => {
    dispatch(removeEvent(eventId));
    closeModal();
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>Calendar</Title>
        <div>
          <Button
            onClick={() => setOpen(true)}
            style={inlineStyles.addEventButton}
          >
            Add an event
          </Button>
          <Button
            onClick={handleSignOut}
            style={inlineStyles.signOutButton}
            theme="secondary"
          >
            Sign Out
          </Button>
        </div>
      </HeaderContainer>
      <Modal open={open} closeModal={closeModal} title="Enter the date">
        <EventForm
          onEventAdded={(event: EventType) => onEventAdded(event)}
          onEventUpdated={(event: EventType) => onEventUpdated(event)}
          onEventDeleted={(eventId: number) => onEventDeleted(eventId)}
        />
      </Modal>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        selectable={true}
        events={calendarEvents}
        eventClick={handleEventClick}
      />
    </Container>
  );
}
