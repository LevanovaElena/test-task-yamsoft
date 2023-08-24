import React, { useEffect, useState } from "react";
import { LoginForm } from "./login-form.component";
import { authService } from "../../services/auth.service";
import { ILogin, IUser } from "../../models/users";
import { getMessageOfError } from "../../utils/redux.utils";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { setCredentials, signUp } from "../../store/reducers/user-slice";

import { getFullUser } from "../../services/users.service";

import { LoadingComponent } from "../common/loading.component";
import { ModalComponent } from "../common/modal.component";

export const LoginScreen = (): React.JSX.Element => {
  const [open, setOpen] = useState(false);
  const [login, { error }] = authService.useLoginMutation();
  const { isLoadingUser, isLoadingError } = useAppSelector(
    (state) => state.authReducer,
  );

  useEffect(() => {
    if (isLoadingError) setOpen(isLoadingError);
  }, [isLoadingError]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (userName: string, password: string) => {
    const loginData: ILogin = { username: userName, password: password };

    const token = await login(loginData).unwrap();
    const currentUser: IUser = { ...loginData };
    dispatch(
      setCredentials({
        user: currentUser || null,
        token: token?.token || null,
      }),
    );
    try {
      await getFullUser(userName, dispatch);
      navigate(-1);
    } catch (e) {
      setOpen(true);
    }
  };

  return (
    <div
      className={
        "flex justify-center  md:flex-row py-20 px-10 lg:px-20 xl:mx-20 "
      }
    >
      <ModalComponent
        message={"Something went wrong. Please, login again!"}
        isOpen={open}
        onOk={() => {
          setOpen(false);
          dispatch(signUp());
          navigate("/login");
        }}
        okButtonCaption={"OK"}
        type={"danger"}
      />
      {isLoadingUser ? (
        <LoadingComponent />
      ) : (
        <LoginForm
          handleSubmit={handleLogin}
          title={"Login"}
          error={getMessageOfError(error)}
          isLoading={true}
        />
      )}
    </div>
  );
};
