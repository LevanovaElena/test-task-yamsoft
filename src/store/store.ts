import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authService } from "../services/auth.service";
import { productsApi } from "../services/products.api";
import authReducer from "../store/reducers/user-slice";
import cartReducer from "../store/reducers/cart-slice";
import { usersService } from "../services/users.service";
import { cartService } from "../services/cart.service";

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [authService.reducerPath]: authService.reducer,
  authReducer,
  [usersService.reducerPath]: usersService.reducer,
  [cartService.reducerPath]: cartService.reducer,
  cartReducer,
});
export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(productsApi.middleware)
        .concat(authService.middleware)
        .concat(usersService.middleware)
        .concat(cartService.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
export type AppDispatch = AppStore["dispatch"];
