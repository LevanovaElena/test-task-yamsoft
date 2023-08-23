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
  console.log("open", isOpen);
  if (!isOpen) return null;
  return createPortal(
    <div
      className={`absolute rounded shadow-xl max-w-lg  h-auto top-1/3 left-0 sm:left-1/4 md:left-1/3 p-6 flex flex-col ${
        type === "danger"
          ? "bg-gradient-to-b from-red-500 to-red-200 text-white"
          : "bg-gradient-to-b from-gray-200 to-white"
      }`}
    >
      <span className="text-2xl text-start">{message}</span>
      <div className={"grid grid-cols-2"}>
        <div className={"flex justify-start"}>
          {onOk && (
            <ButtonComponent
              caption={okButtonCaption}
              onClick={onOk}
              color={type === "danger" ? "red" : "gray"}
              size={"md"}
              className="w-auto mt-10"
            />
          )}
        </div>
        <div className={"flex justify-end"}>
          <ButtonComponent
            caption={closeButtonCaption}
            onClick={onClose}
            color={type === "danger" ? "red" : "gray"}
            size={"md"}
            className="w-full mt-10 float-left"
          />
        </div>
      </div>
    </div>,
    document.body,
  );
};
