import React from "react";
import { ButtonComponent } from "../common/button.component";

export declare type CartResultComponentProps = {
  caption: string;
  buttonCaption: string;
  onClick: () => void;
  children: React.JSX.Element;
  className?: string;
};
export const CartResultComponent = ({
  caption,
  buttonCaption,
  onClick,
  children,
  className,
}: CartResultComponentProps): React.JSX.Element => {
  return (
    <div
      className={`flex flex-col justify-between  rounded shadow-2xl ${
        className || ""
      }`}
    >
      <h2 className="text-2xl mb-4 font-bold text-gray-700">{caption}</h2>
      {children}
      <div className="flex justify-center mt-8">
        <ButtonComponent
          caption={buttonCaption}
          onClick={onClick}
          color={"red"}
          size={"lg"}
          className={" w-full sm:w-auto"}
        />
      </div>
    </div>
  );
};
