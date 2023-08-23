import React from "react";
import { createPortal } from "react-dom";
import { ButtonComponent } from "./button.component";

export declare type ModalComponentProps = {
  caption?: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
  onOk?: () => void;
  okButtonCaption?: string;
  closeButtonCaption?: string;
  type?: "danger" | "simple";
};
export const ModalComponent = ({
  message,
  isOpen,
  onClose,
  onOk,
  okButtonCaption = "OK",
  type = "simple",
  closeButtonCaption = "Cancel",
}: ModalComponentProps): React.JSX.Element | null => {
  if (!isOpen) return null;
  return createPortal(
    <div
      className={`absolute rounded-md shadow-2xl w-auto   right-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-7   bg-white ${
        type === "danger" ? "shadow-red-700 " : "shadow-gray-700 "
      }`}
    >
      <div className={"h-full flex flex-col"}>
        <span className="text-2xl text-start block ">{message}</span>
        <div className={"grid grid-cols-2 grid-rows-1 "}>
          <div className={"flex justify-start items-end"}>
            {onOk && (
              <ButtonComponent
                caption={okButtonCaption}
                onClick={onOk}
                color={type === "danger" ? "red" : "gray"}
                size={"md"}
                className="w-auto "
              />
            )}
          </div>
          <div className={"flex justify-end"}>
            <ButtonComponent
              caption={closeButtonCaption}
              onClick={onClose}
              color={type === "danger" ? "red" : "gray"}
              size={"md"}
              className="w-full mt-10 "
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
