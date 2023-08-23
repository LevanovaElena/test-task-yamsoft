import React from "react";
import { IProduct } from "../../models/products";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ICartProduct } from "../../models/cart";
import { addProduct, deleteProduct } from "../../store/reducers/cart-slice";
import { CounterComponent } from "../common/counter.component";

export declare type CartItemProps = { product: IProduct; count: number };
export const CartItem = ({
  product,
  count,
}: CartItemProps): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const handleMinusProduct = () => {
    const productNew: ICartProduct = {
      productId: product.id,
      quantity: 1,
      product: product,
    };
    dispatch(deleteProduct({ newProduct: productNew }));
  };
  const handleAddProduct = () => {
    const productNew: ICartProduct = {
      productId: product.id,
      quantity: 1,
      product: product,
    };
    dispatch(addProduct({ newProduct: productNew }));
  };
  return (
    <div className="flex pb-10 justify-between">
      <div className="flex flex-col md:flex-row">
        <div className="rounded shadow-md  h-auto w-[140px] p-2 flex justify-center me-5">
          <img
            className="object-contain"
            src={product.image}
            alt={`${product.title}`}
          />
        </div>
        <div className="flex flex-col justify-between ">
          <div className="max-w-md mt-5">
            <Link
              to={`/product/${product.id}`}
              className="hover:underline text-ellipsis break-words font-bold text-slate-700 leading-snug uppercase py-3 "
            >
              {product.title}
            </Link>
            <div className=" text-md text-slate-600 pt-2">{`${product.price}  $`}</div>
          </div>
          <div className="flex justify-start items-center pb-5 mt-3">
            <CounterComponent
              count={count}
              onPlus={handleAddProduct}
              onMinus={handleMinusProduct}
            />
            <div className=" sm:hidden text-lg font-bold text-slate-600 ms-10">{`${
              product.price * count
            } $`}</div>
          </div>
        </div>
      </div>
      <div className="  hidden sm:flex justify-center items-center  text-lg font-bold text-slate-600">{`${
        product.price * count
      }`}</div>
    </div>
  );
};
