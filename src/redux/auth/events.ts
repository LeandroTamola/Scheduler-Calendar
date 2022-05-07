import {
  getSignInRequest,
  getSignInSuccess,
  getSignInFailure,
} from "./actions";

export const signIn = ({ username, password }) => {
  return async (dispatch) => {
    dispatch(getSignInRequest());
    setTimeout(async () => {
      try {
        // username and password should be send it on the request for validation
        const result = await fetch("currentUser.json");
        const json = await result.json();
        return dispatch(getSignInSuccess(json));
      } catch (error) {
        dispatch(getSignInFailure(error));
      }
    }, 4000);
  };
};
