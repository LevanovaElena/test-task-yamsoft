import React from "react";
import { createPortal } from "react-dom";
import { ButtonComponent } from "./button.component";

export declare type ModalComponentProps = {
  caption?: string;
  message?: string;
  isOpen: boolean;
  onClose?: () => void;
  onOk?: () => void;
  okButtonCaption?: string;
  closeButtonCaption?: string;
  type?: "danger" | "simple";
  children?: React.JSX.Element;
  size?: "sm" | "md";
};
export const ModalComponent = ({
  message,
  isOpen,
  onClose,
  onOk,
  okButtonCaption = "OK",
  type = "simple",
  closeButtonCaption = "Cancel",
  children,
  size = "sm",
}: ModalComponentProps): React.JSX.Element | null => {
  if (!isOpen) return null;
  return createPortal(
    <div
      className={`absolute rounded-md shadow-2xl  right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-7   bg-white ${
        type === "danger" ? "shadow-red-700 " : "shadow-gray-700 "
      } ${
        size === "md" ? "w-4/5  md:w-3/4 xl:w-2/4" : "w-4/5  md:w-2/5 xl:w-1/4"
      }`}
    >
      <div className={"h-full flex flex-col"}>
        {message && (
          <span className="text-2xl text-start block min-h-[150px]">
            {message}
          </span>
        )}
        {children && <div>{children}</div>}
        <div className={"grid grid-cols-2 grid-rows-1 "}>
          <div className={"flex justify-start me-2"}>
            {onClose && (
              <ButtonComponent
                caption={closeButtonCaption}
                onClick={onClose}
                color={"white"}
                size={"md"}
                className="w-full mt-10 md:w-1/2"
              />
            )}
          </div>
          <div className={"flex justify-end items-end"}>
            {onOk && (
              <ButtonComponent
                caption={okButtonCaption}
                onClick={onOk}
                color={type === "danger" ? "red" : "gray"}
                size={"md"}
                className="w-full ms-2 md:w-1/2"
              />
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
