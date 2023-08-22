import React from "react";
import { LoginForm } from "../components/login-form.component";
import { authService } from "../../services/auth.service";
import { ILogin, IUser } from "../../models/users";
import { getMessageOfError } from "../../utils/redux.utils";
import { useAppDispatch } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../store/reducers/user-slice";

export const LoginScreen = (): React.JSX.Element => {
  const [login, { error, isLoading }] = authService.useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (userName: string, password: string) => {
    const loginData: ILogin = { username: userName, password: password };
    try {
      const token = await login(loginData).unwrap();
      const currentUser: IUser = { ...loginData };
      console.log(currentUser);
      dispatch(
        setCredentials({
          user: currentUser || null,
          token: token?.token || null,
        }),
      );
      navigate("/");
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <LoginForm
      handleSubmit={handleLogin}
      title={"Submit"}
      error={getMessageOfError(error)}
      isLoading={isLoading}
    />
  );
};
