import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { CartItem } from "./cart-item.component";
import { deleteCart } from "../../store/reducers/cart-slice";
import { Link, useNavigate } from "react-router-dom";
import { ButtonComponent } from "../common/button.component";
import { getSumProducts, getTotalPrice } from "../../utils/cart.utils";
import { ModalComponent } from "../common/modal.component";

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
      <div className="flex justify-center  md:flex-row py-20 px-10 lg:px-20 xl:mx-20 ">
        <div className="rounded shadow-lg p-6 w-1/3 ms-3 h-1/3">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Cart is empty</h2>
          </div>
          <div className="flex justify-between my-2">
            <p className="text-xl ">
              Find product on{" "}
              <Link className={"hover:underline"} to={"/"}>
                product list page
              </Link>
            </p>
          </div>
          <button
            className="rounded-2xl bg-red-700 py-4 mt-10 text-2xl text-white w-full hover:bg-red-500"
            onClick={() => navigate("/")}
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col md:flex-row py-20 px-10 lg:px-20 xl:mx-20 ">
      <div className="flex-col w-2/3 pe-10">
        {cart.products &&
          cart.products.length > 0 &&
          cart.products.map((product) => (
            <CartItem key={product.productId} product={product.product} />
          ))}
      </div>
      <div className="rounded shadow-lg p-6 w-1/3 ms-3 h-1/3">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Total price</h2>
          <p className="text-xl font-bold">{getTotalPrice(cart.products)}</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="text-xl ">
            {`${
              cart.products.length > 0
                ? getSumProducts(cart.products) + " products"
                : "Add products in cart"
            }`}
          </p>
        </div>
        <ButtonComponent
          caption={user ? "Submit Order" : "Sign In"}
          onClick={handleSubmitOrder}
          color={"red"}
          size={"lg"}
          className="mt-10 w-full"
        />
      </div>
      <ModalComponent
        message={"Thank You for your order!"}
        isOpen={open}
        onClose={() => {
          dispatch(deleteCart());
          setOpen(false);
          navigate("/");
        }}
        closeButtonCaption={"OK"}
        type={"simple"}
      />
    </div>
  );
};
