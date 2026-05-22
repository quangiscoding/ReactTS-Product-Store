import type { RootState } from "../../app/store.ts";

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuth = (state: RootState) => state.auth.isAuthenticated;
