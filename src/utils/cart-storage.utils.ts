import { ICart } from "../models/cart";

export const getCartStorage = () => {
  const cart = localStorage.getItem("app_cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return null;
};
export const setCartStorage = (cart: ICart) => {
  localStorage.setItem("app_cart", JSON.stringify(cart));
};
export const deleteCartStorage = () => {
  localStorage.setItem("app_cart", "");
};
