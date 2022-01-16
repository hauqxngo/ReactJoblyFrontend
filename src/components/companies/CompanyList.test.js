import React from "react";
import { render } from "@testing-library/react";
import CompanyList from "./CompanyList";

it("matches snapshot", () => {
  const { asFragment } = render(<CompanyList />);
  expect(asFragment()).toMatchSnapshot();
});
