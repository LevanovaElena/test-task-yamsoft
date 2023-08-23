import React, { useState } from "react";
import { IProduct } from "../../models/products";
import { ModalComponent } from "../common/modal.component";

export declare type ProductCaptionComponentProps = {
  product: IProduct;
  addProduct: () => void;
};
export const ProductCaptionComponent = ({
  addProduct,
  product,
}: ProductCaptionComponentProps): React.JSX.Element => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div
        className=" h-[350px] p-5 flex justify-center cursor-pointer"
        onClick={() => setIsOpenModal(true)}
      >
        <img
          className="object-contain"
          src={product.image}
          alt={`${product.title}`}
        />
      </div>
      <div className="w-full pb-3   ">
        <div
          onClick={() => setIsOpenModal(true)}
          className={"cursor-pointer h-[80px] "}
        >
          <span className="hover:underline text-ellipsis break-words font-bold text-slate-600 leading-snug uppercase max-h-full block text-sm">
            {product.title}
          </span>
        </div>
      </div>
      <ModalComponent
        isOpen={isOpenModal}
        onClose={() => {
          setIsOpenModal(false);
        }}
        closeButtonCaption={"Cancel"}
        type={"simple"}
        okButtonCaption={"Add To Cart"}
        onOk={() => {
          addProduct();
          setIsOpenModal(false);
        }}
        size={"md"}
      >
        <>
          <div className=" h-[400px] p-3 flex justify-center">
            <img
              className="object-contain"
              src={product.image}
              alt={`${product.title}`}
            />
          </div>
          <div className="w-full pb-3 font-bold text-slate-700 leading-snug uppercase h-auto  ">
            <span className=" text-ellipsis break-words ">{product.title}</span>
          </div>
          <div className="w-full pb-3  h-auto  ">
            <span className="text-lg">{product.description}</span>
          </div>
          <div className="flex-col">
            <div className="w-full h-full flex justify-between align-middle">
              <div className=" text-md text-slate-600">{`Price: ${product.price}  $`}</div>
            </div>
          </div>
        </>
      </ModalComponent>
    </>
  );
};
