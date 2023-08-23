import React from "react";
import IconPlus from "../../images/icons/plus.svg";
import IconMinus from "../../images/icons/minus.svg";

export declare type CounterComponentProps = {
  onPlus: () => void;
  onMinus: () => void;
  count: number;
};
export const CounterComponent = ({
  onMinus,
  onPlus,
  count,
}: CounterComponentProps): React.JSX.Element => {
  return (
    <div className="flex flex-end h-[20px]">
      {count > 0 && (
        <>
          <button onClick={onMinus}>
            <img src={IconMinus} alt="add to cart" width={24} height={24} />
          </button>
          <p className="text-red-500 px-2 h-auto font-bold">{count}</p>
        </>
      )}
      <button onClick={onPlus}>
        <img src={IconPlus} alt="add to cart" width={24} height={24} />
      </button>
    </div>
  );
};
