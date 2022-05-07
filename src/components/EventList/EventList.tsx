import { useDispatch, useSelector } from "react-redux";

import { updateSearch } from "../../redux/events/actions";
import { getEvents } from "../../redux/events/events";
import {
  eventsResponseSelector,
  filteredEventsSelector,
  searchSelector,
} from "../../redux/events/selectors";
import { EventType } from "../../types/event";
import { Button } from "../ui/Button";
import { Paragraph, Title } from "../ui/Text";
import {
  Container,
  HeaderContainer,
  inlineStyles,
  Input,
  ListContainer,
  ListElement,
} from "./styles";

type Props = {
  events?: EventType[];
};

function EventList({ events }: Props) {
  const search = useSelector(searchSelector);
  const filteredEvents = useSelector(filteredEventsSelector);
  const { isLoading, error } = useSelector(eventsResponseSelector);
  const dispatch = useDispatch();

  const handleTryAgain = () => dispatch(getEvents());
  const handleSearch = (event) => dispatch(updateSearch(event.target.value));

  if (error) {
    return (
      <Container>
        <Paragraph style={inlineStyles.errorMessage}>{error.message}</Paragraph>
        <Button onClick={handleTryAgain}>Try again</Button>
      </Container>
    );
  }

  if (!events.length && !isLoading) {
    return (
      <Container>
        <Paragraph>No events.</Paragraph>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <Paragraph>Loading events...</Paragraph>
      </Container>
    );
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>Event List</Title>
        <Input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search event"
        />
      </HeaderContainer>
      <ListContainer>
        <ul>
          {filteredEvents.map((event) => (
            <ListElement key={event.id}>
              {event.id} {event.title}
            </ListElement>
          ))}
        </ul>
      </ListContainer>
    </Container>
  );
}

export { EventList };
