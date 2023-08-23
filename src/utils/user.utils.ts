import { AuthState } from "../store/reducers/user-slice";

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
