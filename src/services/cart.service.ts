import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../configure";
import { ILogin } from "../models/users";
import { ICart } from "../models/cart";

export const cartService = createApi({
  reducerPath: "cart/api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    updateCart: build.mutation<ICart, { idCart: number; newCart: ICart }>({
      query: ({ idCart, newCart }) => ({
        url: `carts/${idCart}`,
        method: "PUT",
        body: newCart,
      }),
    }),
    addCart: build.mutation<ICart, { newCart: ICart }>({
      query: ({ newCart }) => ({
        url: `carts`,
        method: "POST",
        body: newCart,
      }),
    }),
    deleteCart: build.mutation<ICart, { idCart: number }>({
      query: ({ idCart }) => ({
        url: `carts/${idCart}`,
        method: "DELETE",
      }),
    }),
    getUserCart: build.query<ICart, { idUser: number }>({
      query: ({ idUser }) => ({
        url: `carts/user/${idUser}`,
      }),
    }),
  }),
});
export const { useUpdateCartMutation, useGetUserCartQuery } = cartService;
