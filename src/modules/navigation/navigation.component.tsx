import React from "react";
import { Link } from "react-router-dom";
import IconCart from "../../images/icons/shopping-bag.svg";
import IconHome from "../../images/icons/home.svg";
import IconLogin from "../../images/icons/login.svg";
import Avatar from "../../images/icons/avatar.svg";
import { useAppSelector } from "../../hooks/redux";

export const NavigationComponent = (): React.JSX.Element => {
  const { token, user } = useAppSelector((state) => state.authReducer);
  const { cart } = useAppSelector((state) => state.cartReducer);
  return (
    <nav className="w-full fixed  top-0 left-0 right-0 z-50 flex items-center justify-between  h-[50px] bg-white   shadow-xl  px-1 xl:px-20 ">
      <div className="flex  justify-between text-gray-700  mx-5 xl:mx-20 w-full">
        <Link to={"/"} className="ms-5">
          <h3 className="font-bold align-middle  text-xl">
            <span className="text-red-500">B</span>
            ou<span className="text-red-500">T</span>i
            <span className="text-red-500">Q</span>ue
          </h3>
        </Link>
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

          <Link to={"/cart"} className="ms-5 relative">
            <img
              src={IconCart}
              width={24}
              height={24}
              alt="Cart"
              className=""
            />
            {cart && cart.products.length > 0 && (
              <div className="rounded-full bg-red-500 text-white font-bold text-sm absolute bottom-[-7px] right-[-10px] w-[20px] h-[20px] text-center">
                {cart.products.reduce(
                  (sum, current) => sum + current.quantity,
                  0,
                )}
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
