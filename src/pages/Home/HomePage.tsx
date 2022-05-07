import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CalendarContainer, EventListContainer, HomeContainer } from "./styles";
import { EventList } from "../../components/EventList";
import Calendar from "../../components/Calendar";
import { eventsSelector } from "../../redux/events/selectors";
import { getEvents } from "../../redux/events/events";

function HomePage() {
  const events = useSelector(eventsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!events.length) {
      dispatch(getEvents());
    }
  }, [dispatch]);

  return (
    <HomeContainer>
      <EventListContainer>
        <EventList events={events} />
      </EventListContainer>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
    </HomeContainer>
  );
}

export { HomePage };
