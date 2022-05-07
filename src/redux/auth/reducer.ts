import * as actions from "./actions";

export const initialState = {
  currentUser: null,
  isLoading: false,
  error: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_OUT:
      return {
        ...state,
        currentUser: null,
      };
    case actions.SIGN_IN_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      };
    case actions.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentUser: action.payload,
      };
    case actions.SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
