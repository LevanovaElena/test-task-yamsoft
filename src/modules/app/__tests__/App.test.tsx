import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { MemoryRouter } from "react-router-dom";
import "intersection-observer";

describe("App", () => {
  test("App should be render correct", async () => {
    await render(
      <Provider store={store()}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
  });
});
