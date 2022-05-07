import * as actions from "./actions";

export const initialState = {
  events: [],
  isLoading: false,
  error: undefined,
  search: "",
  selectedEvent: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case actions.REMOVE_EVENT:
      const newState = state.events.filter(
        (event) => event.id != action.payload
      );
      return {
        ...state,
        events: newState,
      };
    case actions.UPDATE_EVENT:
      const updatedState = state.events.filter(
        (event) => event.id != action.payload.id
      );
      return {
        ...state,
        events: [...updatedState, action.payload],
      };
    case actions.SELECT_EVENT:
      return {
        ...state,
        selectedEvent: action.payload,
      };
    case actions.REMOVE_SELECTED_EVENT:
      return {
        ...state,
        selectedEvent: null,
      };
    case actions.GET_EVENTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case actions.GET_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: action.payload,
      };
    case actions.GET_EVENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case actions.UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
