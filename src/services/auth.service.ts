import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../configure";
import { ILogin } from "../models/users";

export const authService = createApi({
  reducerPath: "auth/api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    login: build.mutation<{ token: string }, ILogin>({
      query: (body) => ({
        url: `auth/login`,
        method: "POST",
        body,
      }),
      //transformResponse(response:ProductsList)=>response.items;//для изменения данных в итоге
    }),
  }),
});
export const { useLoginMutation } = authService;
