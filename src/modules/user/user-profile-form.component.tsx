import React from "react";
import { IUser } from "../../models/users";
import { FieldFormComponent } from "../common/field-form.component";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../common/button.component";

export declare type UserSettingsFormProps = {
  title: string;
  handleSubmit: (username: string, password: string) => void;
  error: string | null;
  isLoading: boolean;
  user: IUser;
};
export const UserProfileForm = ({
  title,
  handleSubmit,
  user,
}: UserSettingsFormProps): React.JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start rounded shadow-2xl w-[500px] h-auto  p-3 md:p-10 justify-between ">
      <h2 className="text-2xl mb-4 font-bold text-gray-700">Profile</h2>
      <form className="w-full ">
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
      <div className={"flex flex-col md:flex-row justify-between mt-2"}>
        <ButtonComponent
          caption={"Cancel"}
          onClick={() => {
            navigate(-1);
          }}
          color={"white"}
          size={"md"}
          className={"mb-2 md:mb-0 md:w-1/3"}
        />
        <ButtonComponent
          caption={title}
          onClick={() => {
            handleSubmit(user.username, user.password);
          }}
          color={"gray"}
          size={"md"}
          className={"md:w-1/3"}
        />
      </div>
    </div>
  );
};
