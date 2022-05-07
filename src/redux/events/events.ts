import {
  getEventsFailure,
  getEventsRequest,
  getEventsSuccess,
} from "./actions";

export const getEvents = () => {
  return async (dispatch) => {
    dispatch(getEventsRequest());
    setTimeout(async () => {
      try {
        const result = await fetch("events.json");
        const json = await result.json();
        return dispatch(getEventsSuccess(json));
      } catch (e) {
        dispatch(getEventsFailure(e));
      }
    }, 4000);
  };
};
