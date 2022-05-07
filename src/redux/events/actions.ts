import { EventType } from "../../types/event";

export const ADD_EVENT = "events/ADD_EVENT";
export const REMOVE_EVENT = "events/REMOVE_EVENT";
export const UPDATE_EVENT = "events/UPDATE_EVENT";
export const GET_EVENTS_REQUESTED = "events/GET_EVENTS_REQUESTED";
export const GET_EVENTS_SUCCESS = "events/GET_EVENTS_SUCCESS";
export const GET_EVENTS_FAILURE = "events/GET_EVENTS_FAILURE";
export const UPDATE_SEARCH = "events/UPDATE_SEARCH";
export const SELECT_EVENT = "events/SELECT_EVENT";
export const REMOVE_SELECTED_EVENT = "events/REMOVE_SELECTED_EVENT";

export const addEvent = (event: EventType) => ({
  type: ADD_EVENT,
  payload: event,
});

export const updateEvent = (event: EventType) => ({
  type: UPDATE_EVENT,
  payload: event,
});

export const selectEvent = (event: EventType) => ({
  type: SELECT_EVENT,
  payload: event,
});

export const removeSelectedEvent = () => ({
  type: REMOVE_SELECTED_EVENT,
});

export const removeEvent = (eventId: number) => ({
  type: REMOVE_EVENT,
  payload: eventId,
});

export const getEventsRequest = () => ({
  type: GET_EVENTS_REQUESTED,
});

export const getEventsSuccess = (data) => ({
  type: GET_EVENTS_SUCCESS,
  payload: data,
});

export const getEventsFailure = (error) => {
  return {
    type: GET_EVENTS_FAILURE,
    payload: error,
  };
};

export const updateSearch = (search) => ({
  type: UPDATE_SEARCH,
  payload: search,
});
