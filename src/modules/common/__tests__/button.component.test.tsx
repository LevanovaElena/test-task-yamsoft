import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ButtonComponent, ButtonComponentProps } from "../button.component";

describe("ButtonComponent", () => {
  const mockOnClick = jest.fn();
  const mainProps: ButtonComponentProps = {
    caption: "Button",
    color: "red",
    onClick: mockOnClick,
    size: "sm",
  };

  afterEach(cleanup);
  const getButton = async (props: ButtonComponentProps) => {
    await render(<ButtonComponent {...props} />);
    return screen.getByRole("button");
  };
  test("ButtonComponent must be render correct", async () => {
    const btn = await getButton(mainProps);
    expect(btn).toBeInTheDocument();
    expect(screen.getByText(mainProps.caption)).toBeInTheDocument();
  });
  test("ButtonComponent must perform a click action", async () => {
    const btn = await getButton(mainProps);
    userEvent.click(btn);
    expect(mockOnClick).toBeCalledTimes(1);
  });
  describe("ButtonComponent must change size", () => {
    test("ButtonComponent must must be small", async () => {
      mainProps.size = "sm";
      const btn = await getButton(mainProps);
      expect(btn.className.includes("p-1")).toBeTruthy();
    });
    test("ButtonComponent must must be middle", async () => {
      mainProps.size = "md";
      const btn = await getButton(mainProps);
      expect(btn.className.includes("p-2")).toBeTruthy();
    });
    test("ButtonComponent must must be big", async () => {
      mainProps.size = "lg";
      const btn = await getButton(mainProps);
      expect(btn.className.includes("py-3")).toBeTruthy();
    });
  });

  describe("ButtonComponent must change color", () => {
    test("ButtonComponent must must be red", async () => {
      mainProps.color = "red";
      const btn = await getButton(mainProps);
      expect(btn.className.includes("red")).toBeTruthy();
    });
    test("ButtonComponent must must be gray", async () => {
      mainProps.color = "gray";
      const btn = await getButton(mainProps);
      expect(btn.className.includes("gray")).toBeTruthy();
    });
    test("ButtonComponent must must be white", async () => {
      mainProps.color = "white";
      const btn = await getButton(mainProps);
      expect(btn.className.includes("white")).toBeTruthy();
    });
  });
  test("ButtonComponent must include some class", async () => {
    mainProps.className = "className";
    const btn = await getButton(mainProps);
    expect(btn.className.includes("className")).toBeTruthy();
  });
});
