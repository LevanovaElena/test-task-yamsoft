import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useNavigate } from "react-router-dom";

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
    <div className="flex flex-col justify-start rounded shadow-xl w-[500px] h-[500px] p-10 justify-between">
      <form>
        {error && (
          <div className="rounded border border-red-500 p-5 text-red-900 font-bold my-5">
            {error}
          </div>
        )}
        <div className="flex items-center  w-full mb-3 ">
          <label htmlFor={"login"} className="w-1/4">
            Enter Login
          </label>
          <input
            type="text"
            className="border py-2 px-4 h-[42px] w-3/4"
            placeholder="Enter Email"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            name={"login"}
          />
        </div>
        <div className="flex items-center  w-full mb-3 ">
          <label htmlFor={"login"} className="w-1/4">
            Enter Password
          </label>
          <input
            type="password"
            className="border py-2 px-4 h-[42px] w-3/4"
            placeholder="Enter Password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
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
            if (username && password) handleSubmit(username, password);
          }}
        >
          {title}
        </button>
      </div>
    </div>
  );
};
