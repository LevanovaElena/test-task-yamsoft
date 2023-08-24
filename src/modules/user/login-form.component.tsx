import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "../common/button.component";
import { FieldFormComponent } from "../common/field-form.component";

export declare type LoginFormProps = {
  title: string;
  handleSubmit: (username: string, password: string) => void;
  error: string | null;
  isLoading: boolean;
  type?: "sign_up" | "login";
};
export const LoginForm = ({
  title,
  handleSubmit,
  error,
}: LoginFormProps): React.JSX.Element => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.authReducer);
  const [username, setUsername] = useState<string | null>(
    user ? user.username : null,
  );
  const [password, setPassword] = useState<string | null>(
    user ? user.password : null,
  );

  return (
    <div className="flex flex-col justify-start rounded shadow-2xl w-[500px] h-auto  p-3 md:p-10 justify-between ">
      <h2 className="text-2xl mb-4 font-bold text-gray-700">{title}</h2>
      <form>
        {error && (
          <div className="rounded border border-red-500 p-5 text-red-600 font-bold my-5">
            {error}
          </div>
        )}

        <FieldFormComponent
          type="text"
          labelCaption={"Login"}
          placeholder="Enter Login"
          id={"login"}
          value={username || ""}
          readOnly={false}
          onChange={setUsername}
        />
        <FieldFormComponent
          type="password"
          labelCaption={"Password"}
          placeholder="Enter Password"
          id={"password"}
          value={password || ""}
          readOnly={false}
          onChange={setPassword}
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
            if (username && password) handleSubmit(username, password);
          }}
          color={"gray"}
          size={"md"}
          className={"md:w-1/3"}
        />
      </div>
    </div>
  );
};
