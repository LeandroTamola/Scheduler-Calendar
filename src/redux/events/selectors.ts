import { createSelector } from "reselect";

export const baseSelector = (state) => state.events;

export const eventsSelector = createSelector(
  baseSelector,
  (events) => events.events
);

export const searchSelector = createSelector(
  baseSelector,
  (state) => state.search
);

export const selectedEventSelector = createSelector(
  [baseSelector],
  (state) =>
    state.events.filter(({ id }) => id === Number(state.selectedEvent))[0]
);

export const filteredEventsSelector = createSelector(
  [eventsSelector, searchSelector],
  (events, search) => events.filter(({ title }) => title.includes(search))
);

export const eventsResponseSelector = (state) => {
  console.log({ isLoading: state.events.isLoading, error: state.events.error });

  return {
    isLoading: state.events.isLoading,
    error: state.events.error,
  };
};
