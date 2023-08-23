import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../models/products";

export declare type ProductCaptionComponentProps = {
  product: IProduct;
};
export const ProductCaptionComponent = ({
  product,
}: ProductCaptionComponentProps): React.JSX.Element => {
  return (
    <>
      <div className=" h-[350px] p-5 flex justify-center">
        <img
          className="object-contain"
          src={product.image}
          alt={`${product.title}`}
        />
      </div>
      <div className="w-full pb-3 font-bold text-slate-700 leading-snug uppercase h-[80px]  ">
        <Link
          to={`/product/${product.id}`}
          className="hover:underline text-ellipsis break-words "
        >
          {product.title}
        </Link>
      </div>
    </>
  );
};
