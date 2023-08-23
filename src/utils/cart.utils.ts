import { ICart, ICartProduct } from "../models/cart";

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

export const getSumProducts = (products: ICartProduct[]) => {
  return products.reduce((sum, current) => sum + current.quantity, 0);
};

export const getTotalPrice = (products: ICartProduct[]) => {
  const sum = products.reduce(
    (sum, current) => sum + current.product.price * current.quantity,
    0,
  );
  return Math.round(sum * 100) / 100;
};
