import React from "react";

export declare type FieldFormComponentProps = {
  type: string;
  labelCaption?: string;
  placeholder?: string;
  value: string;
  id: string;
  className?: string;
};
export const FieldFormComponent = ({
  type,
  labelCaption,
  placeholder,
  value,
  id,
  className,
}: FieldFormComponentProps): React.JSX.Element => {
  return (
    <div className="flex items-center  w-full mb-3 ">
      {labelCaption && (
        <label htmlFor={id} className="w-1/4">
          {labelCaption}
        </label>
      )}
      <input
        type={type}
        className={className || "border h-[42px] py-2 px-4 rounded w-3/4"}
        placeholder={placeholder || ""}
        value={value}
        readOnly={true}
        id={id}
      />
    </div>
  );
};
