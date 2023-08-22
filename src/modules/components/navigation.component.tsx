import React from "react";
import { Link } from "react-router-dom";
import IconCart from "../../images/icons/shopping-bag.svg";
import IconHome from "../../images/icons/home.svg";
import IconLogin from "../../images/icons/login.svg";
import Avatar from "../../images/icons/avatar.svg";
import { useAppSelector } from "../../hooks/redux";

export const NavigationComponent = (): React.JSX.Element => {
  const { token, user } = useAppSelector((state) => state.authReducer);
  return (
    <nav className="w-full fixed  top-0 left-0 right-0 z-50 flex items-center justify-between  h-[50px] bg-white   shadow-xl  px-1 xl:px-20 ">
      <div className="flex  justify-between text-gray-700  mx-5 xl:mx-20 w-full">
        <h3 className="font-bold align-middle">Magazine</h3>
        <div className="flex w-50 justify-end">
          <Link to={"/"} className="ms-5">
            <img src={IconHome} width={24} height={24} alt="Home" />
          </Link>
          {token && user ? (
            <Link to={"/user-settings"} className="ms-5">
              <img src={Avatar} width={24} height={24} alt="Sing Up" />
            </Link>
          ) : (
            <Link to={"/login"} className="ms-5">
              <img src={IconLogin} width={24} height={24} alt="Login" />
            </Link>
          )}

          <Link to={"/cart"} className="ms-5">
            <img src={IconCart} width={24} height={24} alt="Cart" />
          </Link>
        </div>
      </div>
    </nav>
  );
};
