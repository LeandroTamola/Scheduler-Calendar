import { createSelector } from "reselect";

export const baseSelector = (state) => state.auth;

export const currentUserSelector = createSelector(
  baseSelector,
  ({ currentUser }) => currentUser
);

export const signInResponseSelector = createSelector(
  baseSelector,
  (currentUser) => ({
    isLoading: currentUser.isLoading,
    error: currentUser.error,
  })
);
