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
    <div className="flex flex-col md:flex-row  items-start md:items-center  w-full mb-3 ">
      {labelCaption && (
        <label htmlFor={id} className="w-full md:w-1/4 mb-2 md:mb-0">
          {labelCaption}
        </label>
      )}
      <input
        type={type}
        className={
          className || "border h-[42px] py-2 px-4 rounded w-full md:w-3/4"
        }
        placeholder={placeholder || ""}
        value={value}
        readOnly={true}
        id={id}
      />
    </div>
  );
};
