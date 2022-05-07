import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {};
const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const persistConfig = {
  key: "events",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default createStore(persistedReducer, initialState, composedEnhancers);
