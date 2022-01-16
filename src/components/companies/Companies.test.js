import React from "react";
import { render } from "@testing-library/react";
import Companies from "./Companies";
import { MemoryRouter } from "react-router";

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Companies
        handle="abc"
        name="ABC Company"
        description="A is for Apple. B is for Bus. C is for Cat."
      />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
