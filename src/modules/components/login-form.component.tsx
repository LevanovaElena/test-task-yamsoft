import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";

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
  isLoading,
  type = "login",
}: LoginFormProps): React.JSX.Element => {
  const { user } = useAppSelector((state) => state.authReducer);
  const [username, setUsername] = useState<string | null>(
    user ? user.username : null,
  );
  const [password, setPassword] = useState<string | null>(
    user ? user.password : null,
  );

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="rounded shadow-xl w-[500px] h-[500px] p-10">
        {error && (
          <div className="rounded border border-red-500 p-5 text-red-900 font-bold my-5">
            {error}
          </div>
        )}
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-10"
          placeholder="Enter Email"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Enter Password"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type={"button"}
          className={"rounded bg-gray-600 text-white hover:bg-gray-400 p-2"}
          onClick={() => {
            if (username && password) handleSubmit(username, password);
          }}
        >
          {title}
        </button>
      </form>
    </div>
  );
};
