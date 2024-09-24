import React from "react";
import { render, screen } from "@testing-library/react";
import AppReducer from "./AppReducer";

test("renders learn react link", () => {
  render(<AppReducer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
