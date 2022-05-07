import { combineReducers } from "redux";
import events from "./events/reducer";
import auth from "./auth/reducer";
import { SIGN_OUT } from "./auth/actions";
import { initialState as authInitialState } from "./auth/reducer";
import { initialState as eventsInitialState } from "./events/reducer";
import storage from "redux-persist/lib/storage";

const initialState = {
  auth: authInitialState,
  events: eventsInitialState,
};

const appReducer = combineReducers({
  auth,
  events,
});

const rootReducer = (state, action) => {
  if (action.type === SIGN_OUT) {
    storage.removeItem("persist:root");
    return appReducer(initialState, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
