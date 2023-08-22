import React from "react";
import { IProduct } from "../../models/products";
import { Link } from "react-router-dom";
import IconPlus from "../../images/icons/plus.svg";

export declare type ProductComponentProps = { product: IProduct };
export const ProductComponent = ({
  product,
}: ProductComponentProps): React.JSX.Element => {
  const handleAddProduct = () => {};
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
          <button onClick={handleAddProduct}>
            <img src={IconPlus} alt="add to cart" width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
