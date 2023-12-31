import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { signUp } from "../../store/reducers/user-slice";
import { useNavigate } from "react-router-dom";
import { UserProfileForm } from "./user-profile-form.component";
import { getFullUser } from "../../services/users.service";
import { LoadingComponent } from "../common/loading.component";
export const UserProfileScreen = (): React.JSX.Element | null => {
  const { user, isLoadingUser } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !user.id) {
      getFullUser(user.username, dispatch);
    }
  }, [user, dispatch]);
  const handleSignUp = () => {
    dispatch(signUp());
    navigate("/");
  };

  if (!user || isLoadingUser) {
    return (
      <div
        className={
          "flex justify-center  md:flex-row py-20 px-10 lg:px-20 xl:mx-20 "
        }
      >
        <LoadingComponent />
      </div>
    );
  }
  if (user && !isLoadingUser)
    return (
      <div
        className={
          "flex justify-center  md:flex-row p-2 py-20 md:p-20 lg:px-20 xl:mx-20 "
        }
      >
        <UserProfileForm
          handleSubmit={handleSignUp}
          title={"Sign Up"}
          error={""}
          isLoading={false}
          user={user}
        />
      </div>
    );
  else return null;
};
