import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./modules/app/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <Provider store={store()}>
    <BrowserRouter basename={"/test-task-yamsoft/"}>
      <App />
    </BrowserRouter>
  </Provider>,
);
