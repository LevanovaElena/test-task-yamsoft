import React from "react";
import { IUser } from "../../models/users";
import { FieldFormComponent } from "../common/field-form.component";
import { useNavigate } from "react-router-dom";

export declare type UserSettingsFormProps = {
  title: string;
  handleSubmit: (username: string, password: string) => void;
  error: string | null;
  isLoading: boolean;
  user: IUser;
};
export const UserSettingsForm = ({
  title,
  handleSubmit,
  user,
}: UserSettingsFormProps): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start rounded shadow-xl w-[500px] h-[500px] p-10 justify-between">
      <form className="">
        <FieldFormComponent
          type="text"
          labelCaption={"First Name"}
          id={"last_name"}
          value={user.name?.firstname || ""}
        />
        <FieldFormComponent
          type="text"
          labelCaption={"Last Name"}
          id={"first_name"}
          value={user.name?.lastname || ""}
        />
        <FieldFormComponent
          type="text"
          labelCaption={"Email"}
          id={"last_name"}
          value={user.email || ""}
        />
        <FieldFormComponent
          type="text"
          labelCaption={"Address"}
          id={"address"}
          value={`${user.address?.zipcode || ""} ${user.address?.city || ""} ${
            user.address?.street || ""
          } ${user.address?.number || ""}`}
        />
        <FieldFormComponent
          type="text"
          labelCaption={"Phone"}
          id={"phone"}
          value={user.phone || ""}
        />
        <FieldFormComponent
          type="text"
          labelCaption={"Username"}
          id={"username"}
          value={user.username || ""}
        />
      </form>
      <div className={"flex justify-between"}>
        <button
          type={"button"}
          className={
            "rounded bg-white text-white hover:bg-gray-100 p-2 w-1/3 text-gray-600 border-gray-600 border-2 text-xl"
          }
          onClick={() => {
            navigate(-1);
          }}
        >
          Cancel
        </button>
        <button
          type={"button"}
          className={
            "rounded bg-gray-600 text-white hover:bg-gray-400 p-2 w-1/3 text-xl"
          }
          onClick={() => {
            handleSubmit(user.username, user.password);
          }}
        >
          {title}
        </button>
      </div>
    </div>
  );
};
