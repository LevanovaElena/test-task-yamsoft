import React from "react";

export declare type ButtonComponentProps = {
  caption: string;
  onClick: () => void;
  color: "red" | "gray" | "white";
  size: "sm" | "md" | "lg";
  className?: string;
};
export const ButtonComponent = ({
  onClick,
  caption,
  color,
  size,
  className = "",
}: ButtonComponentProps): React.JSX.Element => {
  const getClassButton = () => {
    let colorBtn = "bg-gray-600";
    switch (color) {
      case "red":
        colorBtn =
          "bg-red-500 text-white hover:bg-red-400 border-red-500 hover:border-red-400";
        break;
      case "gray":
        colorBtn =
          "bg-gray-600 text-white hover:bg-gray-400 border-gray-600 hover:border-gray-400";
        break;
      case "white":
        colorBtn = "bg-white text-gray-600 hover:bg-gray-100  border-gray-500 ";
        break;
    }
    let sizeBtn = "";
    switch (size) {
      case "sm":
        sizeBtn = "p-1 text-md";
        break;
      case "md":
        sizeBtn = "p-2 text-lg";
        break;
      case "lg":
        sizeBtn = "py-3 px-5 text-2xl";
        break;
    }
    return `rounded-lg font-bold border-2 ${colorBtn} ${sizeBtn} ${className}`;
  };
  return (
    <button
      type={"button"}
      className={getClassButton()}
      onClick={() => onClick()}
    >
      {caption}
    </button>
  );
};
