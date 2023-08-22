import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { LoginForm } from "../components/login-form.component";
import { signUp } from "../../store/reducers/user-slice";
export const UserSettingsScreen = (): React.JSX.Element => {
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const handleSignUp = () => {
    dispatch(signUp());
  };

  if (!user) return <div>Error</div>;
  return (
    <LoginForm
      handleSubmit={handleSignUp}
      title={"Sign Up"}
      error={""}
      isLoading={false}
      type={"sign_up"}
    />
  );
};
