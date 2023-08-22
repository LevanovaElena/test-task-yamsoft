import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../configure";
import { UserList } from "../models/users";
import { IParamsForProducts } from "../models/products";

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
