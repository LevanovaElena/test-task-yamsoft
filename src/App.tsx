import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ProductListScreen } from "./modules/screens/product-list.screen";
import { CartScreen } from "./modules/screens/cart.screen";
import { NavigationComponent } from "./modules/components/navigation.component";
import { LoginScreen } from "./modules/screens/login.screen";
import { UserSettingsScreen } from "./modules/screens/user-settings.screen";
import { useAppDispatch } from "./hooks/redux";
import { checkUserSession } from "./store/reducers/user-slice";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <div className="relative  h-screen w-screen overflow-x-hidden">
      <NavigationComponent />
      <Routes>
        <Route path="/" element={<ProductListScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/user-settings" element={<UserSettingsScreen />} />
      </Routes>
    </div>
  );
};

export default App;
