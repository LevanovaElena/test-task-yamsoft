import React from "react";

export declare type FieldFormComponentProps = {
  type: string;
  labelCaption?: string;
  placeholder?: string;
  value: string;
  id: string;
  className?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
};
export const FieldFormComponent = ({
  type,
  labelCaption,
  placeholder,
  value,
  id,
  className,
  readOnly = true,
  onChange,
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
        readOnly={readOnly}
        id={id}
        onChange={(value) => {
          onChange && onChange(value.target.value);
        }}
      />
    </div>
  );
};
