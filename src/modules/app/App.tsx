import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ProductListScreen } from "../product/product-list.screen";
import { CartScreen } from "../cart/cart.screen";
import { NavigationComponent } from "../navigation/navigation.component";
import { LoginScreen } from "../user/login.screen";
import { UserProfileScreen } from "../user/user-profile.screen";
import { useAppDispatch } from "../../hooks/redux";
import { checkUserSession } from "../../store/reducers/user-slice";
import { checkCartStorage } from "../../store/reducers/cart-slice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(checkCartStorage());
  }, [dispatch]);
  return (
    <div className="relative  h-screen w-screen overflow-x-hidden">
      <NavigationComponent />
      <Routes>
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/user-settings" element={<UserProfileScreen />} />
        <Route path="/" element={<ProductListScreen />} />
      </Routes>
    </div>
  );
};

export default App;
