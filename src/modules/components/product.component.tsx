import React from "react";
import { IProduct } from "../../models/products";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ICartProduct } from "../../models/cart";
import { addProduct, deleteProduct } from "../../store/reducers/cart-slice";
import { CounterComponent } from "./counter.component";

export declare type ProductComponentProps = { product: IProduct };
export const ProductComponent = ({
  product,
}: ProductComponentProps): React.JSX.Element => {
  const { user } = useAppSelector((state) => state.authReducer);
  const { cart } = useAppSelector((state) => state.cartReducer);

  const dispatch = useAppDispatch();
  const handleMinusProduct = () => {
    if (user) {
    } else {
      const productNew: ICartProduct = { productId: product.id, quantity: 1 };
      dispatch(deleteProduct({ newProduct: productNew }));
    }
  };
  const handleAddProduct = () => {
    if (user) {
    } else {
      const productNew: ICartProduct = { productId: product.id, quantity: 1 };
      dispatch(addProduct({ newProduct: productNew }));
    }
  };
  return (
    <div className="rounded shadow-md p-5 h-[500px] flex-col">
      <div className=" h-[350px] p-5 flex justify-center">
        <img
          className="object-contain"
          src={product.image}
          alt={`${product.title}`}
        />
      </div>
      <div className="flex-col">
        <div className="w-full pb-3 font-bold text-slate-700 leading-snug uppercase h-[80px]  ">
          <Link
            to={`/product/${product.id}`}
            className="hover:underline text-ellipsis break-words "
          >
            {product.title}
          </Link>
        </div>
        <div className="w-full h-full flex justify-between align-middle">
          <div className=" text-sm text-slate-600">{`${product.price}  $`}</div>
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
  );
};
