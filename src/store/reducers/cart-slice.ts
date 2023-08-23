import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartProduct } from "../../models/cart";
import {
  deleteCartStorage,
  getCartStorage,
  setCartStorage,
} from "../../utils/cart.utils";

type CartState = {
  cart: ICart | null;
};

const initialState = {
  cart: null,
} as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (
      state,
      { payload: { cart } }: PayloadAction<{ cart: ICart | null }>,
    ) => {
      if (cart) {
        state.cart = cart;
        setCartStorage(cart);
      }
    },
    checkCartStorage: (state) => {
      const cart = getCartStorage();
      if (cart) {
        state.cart = cart;
      }
    },
    deleteCart: (state) => {
      state.cart = null;
      deleteCartStorage();
    },
    addProduct: (
      state,
      { payload: { newProduct } }: PayloadAction<{ newProduct: ICartProduct }>,
    ) => {
      const currentCard = state.cart;
      if (currentCard) {
        const product = currentCard.products.find(
          (pr) => pr.productId === newProduct.productId,
        );
        if (product) product.quantity = product.quantity + newProduct.quantity;
        else currentCard.products.push(newProduct);
        state.cart = currentCard;
      } else {
        state.cart = {
          date: new Date().toDateString(),
          id: -1,
          products: [newProduct],
          userId: -1,
        };
      }
      setCartStorage(state.cart);
    },
    deleteProduct: (
      state,
      { payload: { newProduct } }: PayloadAction<{ newProduct: ICartProduct }>,
    ) => {
      const currentCard = state.cart;
      if (currentCard) {
        const product = currentCard.products.find(
          (pr) => pr.productId === newProduct.productId,
        );
        if (product) {
          if (product.quantity > 1) product.quantity--;
          else {
            currentCard.products =
              currentCard.products.length === 1
                ? []
                : currentCard.products.filter(
                    (pr) => pr.productId !== newProduct.productId,
                  );
            console.log(currentCard.products);
          }
        }
        state.cart = currentCard;
        setCartStorage(state.cart);
      }
    },
  },
});

export const {
  setCart,
  checkCartStorage,
  deleteCart,
  addProduct,
  deleteProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
