export const SIGN_OUT = "auth/SIGN_OUT";
export const SIGN_IN_REQUESTED = "auth/SIGN_IN_REQUESTED";
export const SIGN_IN_SUCCESS = "auth/SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "auth/SIGN_IN_FAILURE";

export const signOut = () => ({
  type: SIGN_OUT,
});

export const getSignInRequest = () => ({
  type: SIGN_IN_REQUESTED,
});

export const getSignInSuccess = (data) => ({
  type: SIGN_IN_SUCCESS,
  payload: data,
});

export const getSignInFailure = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};
