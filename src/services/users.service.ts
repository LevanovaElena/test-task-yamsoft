import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../configure";
import { IUser, UserList } from "../models/users";
import { IParamsForProducts } from "../models/products";
import axios from "axios";
import { AppDispatch } from "../store/store";
import {
  setFullUserData,
  userFetching,
  userFetchingError,
  userFetchingSuccess,
} from "../store/reducers/user-slice";

export const usersService = createApi({
  reducerPath: "user/api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getAllUsers: build.query<UserList, IParamsForProducts>({
      query: ({ limit, sort }: IParamsForProducts) => ({
        url: `users`,
        params: {
          limit: limit,
          sort: sort || "desc",
        },
      }),
    }),
  }),
});
export const { useGetAllUsersQuery } = usersService;

export const getFullUser = async (userName: string, dispatch: AppDispatch) => {
  try {
    dispatch(userFetching());
    const response = await axios.get<IUser[]>("https://fakestoreapi.com/users");
    const fullUser = response.data.find((user) => user.username === userName);
    dispatch(userFetchingSuccess());
    dispatch(setFullUserData({ user: fullUser || null }));
  } catch (error) {
    console.log("error", error);
    dispatch(userFetchingError());
  }
};
