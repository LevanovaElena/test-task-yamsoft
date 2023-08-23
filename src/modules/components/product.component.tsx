import React from "react";
import { IProduct } from "../../models/products";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ICartProduct } from "../../models/cart";
import { addProduct, deleteProduct } from "../../store/reducers/cart-slice";
import { CounterComponent } from "./counter.component";
import { ProductCaptionComponent } from "./product-caption.component";

export declare type ProductComponentProps = { product: IProduct };
export const ProductComponent = ({
  product,
}: ProductComponentProps): React.JSX.Element => {
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
    <div className="rounded shadow-md p-5 h-[500px] flex-col">
      <ProductCaptionComponent product={product} />
      <div className="flex-col">
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
