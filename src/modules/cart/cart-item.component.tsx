import React from "react";
import { IProduct } from "../../models/products";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ICartProduct } from "../../models/cart";
import { addProduct, deleteProduct } from "../../store/reducers/cart-slice";
import { CounterComponent } from "../common/counter.component";

export declare type CartItemProps = { product: IProduct };
export const CartItem = ({ product }: CartItemProps): React.JSX.Element => {
  const { cart } = useAppSelector((state) => state.cartReducer);

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
          <div className="max-w-md">
            <Link
              to={`/product/${product.id}`}
              className="hover:underline text-ellipsis break-words font-bold text-slate-700 leading-snug uppercase py-3 "
            >
              {product.title}
            </Link>
            <div className=" text-md text-slate-600 pt-2">{`${product.price}  $`}</div>
          </div>
          <div className="pb-5">
            <CounterComponent
              count={
                cart
                  ? cart.products.find((pr) => pr.productId === product.id)
                      ?.quantity || 0
                  : 0
              }
              onPlus={handleAddProduct}
              onMinus={handleMinusProduct}
            />
          </div>
        </div>
      </div>
      <div className="flex  justify-center align-middle items-center text-lg font-bold text-slate-600">{`${product.price}`}</div>
    </div>
  );
};
