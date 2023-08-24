import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CartItem } from "./cart-item.component";
import { deleteCart } from "../../store/reducers/cart-slice";
import { Link, useNavigate } from "react-router-dom";
import { ButtonComponent } from "../common/button.component";
import { getSumProducts, getTotalPrice } from "../../utils/cart.utils";
import { ModalComponent } from "../common/modal.component";
import { CartResultComponent } from "./cart-result.component";

export declare type CartScreenProps = {};
export const CartScreen = (): React.JSX.Element => {
  const [open, setOpen] = useState(false);

  const { cart } = useAppSelector((state) => state.cartReducer);
  const { user } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmitOrder = () => {
    if (!user) navigate("/login");
    else {
      setOpen(true);
    }
  };

  if (!cart || cart.products.length === 0)
    return (
      <div
        className={
          "flex justify-center  md:flex-row p-2 py-20 md:p-20 lg:px-20 xl:mx-20 "
        }
      >
        <CartResultComponent
          className={"w-[500px] h-auto  p-3 md:p-10 "}
          caption={"Cart is Empty"}
          buttonCaption={"Start Shopping"}
          onClick={() => {
            navigate("/");
          }}
        >
          <p className="text-xl ">
            Find product on{" "}
            <Link className={"hover:underline"} to={"/"}>
              product list page
            </Link>
          </p>
        </CartResultComponent>
      </div>
    );
  return (
    <div className="flex flex-col  justify-between  md:flex-row p-4 py-20 md:px-10  xl:mx-20">
      <div className="flex-col w-full sm:w-2/3 sm:pe-10">
        {cart.products &&
          cart.products.length > 0 &&
          cart.products.map((product) => (
            <CartItem
              key={product.productId}
              product={product.product}
              count={product.quantity || 0}
            />
          ))}
      </div>
      <CartResultComponent
        caption={"Total price"}
        buttonCaption={user ? "Submit Order" : "Login and Continue"}
        onClick={handleSubmitOrder}
        className={"w-auto h-[300px]  p-3 md:p-6 "}
      >
        <>
          <p className="text-xl font-bold">{getTotalPrice(cart.products)}</p>
          <div className="flex justify-between my-2">
            <p className="text-xl ">
              {`${
                cart.products.length > 0
                  ? getSumProducts(cart.products) + " products"
                  : "Add products in cart"
              }`}
            </p>
          </div>
        </>
      </CartResultComponent>
      <ModalComponent
        message={"Thank You for your order!"}
        isOpen={open}
        onOk={() => {
          dispatch(deleteCart());
          setOpen(false);
          navigate("/");
        }}
        okButtonCaption={"OK"}
        type={"simple"}
      />
    </div>
  );
};
