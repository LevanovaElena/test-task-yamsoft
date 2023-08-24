import React from "react";
import { LoadingComponent } from "../loading.component";
import { render, screen } from "@testing-library/react";

describe("LoadingComponent", () => {
  test("LoadingComponent should be render correct", async () => {
    await render(<LoadingComponent />);
    expect(screen.getByTitle("Loading...")).toBeInTheDocument();
  });
});
