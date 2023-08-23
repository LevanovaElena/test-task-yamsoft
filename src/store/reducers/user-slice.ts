import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/users";
import {
  deleteUserSession,
  getUserSession,
  setUserSession,
} from "../../utils/user.utils";
export type AuthState = {
  user: IUser | null;
  token: string | null;
  isLoadingUser?: boolean;
  isLoadingError?: boolean;
};

const initialState = {
  user: null,
  token: null,
  isLoadingUser: false,
  isLoadingError: false,
} as AuthState;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: IUser | null; token: string | null }>,
    ) => {
      state.user = user;
      state.token = token;
      setUserSession(user?.username || "", token || "");
    },
    setFullUserData: (
      state,
      { payload: { user } }: PayloadAction<{ user: IUser | null }>,
    ) => {
      state.user = user;
    },
    checkUserSession: (state) => {
      const saveData = getUserSession();
      if (saveData) {
        state.user = saveData.user;
        state.token = saveData.token;
        setUserSession(saveData.user?.username || "", saveData.token || "");
      }
    },
    signUp: (state) => {
      state.user = null;
      state.token = null;
      deleteUserSession();
    },
    userFetching: (state) => {
      state.isLoadingUser = true;
    },
    userFetchingSuccess: (state) => {
      state.isLoadingUser = false;
    },
    userFetchingError: (state) => {
      console.log("!!!!");
      state.isLoadingError = true;
      state.isLoadingUser = false;
    },
  },
});

export const {
  setCredentials,
  checkUserSession,
  signUp,
  setFullUserData,
  userFetching,
  userFetchingError,
  userFetchingSuccess,
} = authSlice.actions;
export default authSlice.reducer;
