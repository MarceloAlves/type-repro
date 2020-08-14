import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

const defaultProps = {
  a: 1,
};

// Breaks type checking for dev server
// const setup = (props: defaultProps) => render(<App {...props} />);

// Works correctly
const setup = (props = defaultProps) => render(<App {...props} />);

test("renders learn react link", () => {
  const { getByText } = setup();
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
