import React from "react";
import { ButtonComponent } from "../common/button.component";
import { useNavigate } from "react-router-dom";

export declare type NotFoundPageScreenProps = {};
export const NotFoundPageScreen =
  ({}: NotFoundPageScreenProps): React.JSX.Element => {
    const navigate = useNavigate();

    return (
      <div className={"flex  justify-center items-center w-full h-full"}>
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-2xl md:text-5xl font-bold ">Whoops!</h2>
          <span className={"text-1xl md:text-3xl my-10 text-center"}>
            404 Page Not Found
          </span>
          <ButtonComponent
            caption={"Go Home"}
            onClick={() => navigate("/")}
            color={"red"}
            size={"lg"}
          />
        </div>
      </div>
    );
  };
