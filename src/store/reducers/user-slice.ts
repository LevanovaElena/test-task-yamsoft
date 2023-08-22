import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/users";
type AuthState = {
  user: IUser | null;
  token: string | null;
};

const initialState = {
  user: null,
  token: null,
} as AuthState;

export const getUserSession = () => {
  const token = localStorage.getItem("app_token");
  if (token) {
    const timeStart = new Date(
      Number(localStorage.getItem("app_token_start_session")),
    );
    const user = localStorage.getItem("app_token_username");
    if (new Date().getTime() - timeStart.getTime() <= 1800000 && user) {
      const initialState: AuthState = {
        user: { username: user, password: "" },
        token: token,
      };
      return initialState;
    }
  }
  return null;
};
export const setUserSession = (username: string, token: string) => {
  localStorage.setItem("app_token", token);
  localStorage.setItem("app_token_start_session", String(new Date().getTime()));
  localStorage.setItem("app_token_username", username);
};
export const deleteUserSession = () => {
  localStorage.setItem("app_token", "");
  localStorage.setItem("app_token_start_session", "");
  localStorage.setItem("app_token_username", "");
};

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
  },
});

export const { setCredentials, checkUserSession, signUp } = authSlice.actions;
export default authSlice.reducer;
