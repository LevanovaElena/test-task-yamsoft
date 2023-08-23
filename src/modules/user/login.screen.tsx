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
    console.log(isLoadingError);
    if (isLoadingError) setOpen(isLoadingError);
  }, [isLoadingError]);
  /*  useEffect(() => {
    setOpen(isError);
  }, [isError]);*/
  //const { cart } = useAppSelector((state) => state.cartReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  /*
  console.log("user", user);
  const { refetch: refetchCart } = useGetUserCartQuery({
    idUser: user?.id || 0,
  });*/

  //const [updateCart, { isSuccess, data: newCart }] = useUpdateCartMutation();
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
      console.log("error2", error);
    }

    /*      if (user && user.id) {
        const { data } = await refetchCart();

        console.log("cartsOfUsers", data);
        console.log("fulluser", user);
        if (data && data.length === 1 && cart) {
          const cartFromApi = { ...data[0] };
          cartFromApi.products = [...data[0].products, ...cart.products];
          cartFromApi.date = new Date().toDateString();
          await updateCart({ idCart: data[0].id, newCart: cartFromApi });
          console.log("newCart", newCart);
          if (newCart) dispatch(setCart({ cart: newCart }));
        }
      }*/
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
        onClose={() => {
          setOpen(false);
          dispatch(signUp());
          navigate("/login");
        }}
        closeButtonCaption={"OK"}
        type={"danger"}
      />
      {isLoadingUser ? (
        <LoadingComponent />
      ) : (
        <LoginForm
          handleSubmit={handleLogin}
          title={"Submit"}
          error={getMessageOfError(error)}
          isLoading={true}
        />
      )}
    </div>
  );
};
