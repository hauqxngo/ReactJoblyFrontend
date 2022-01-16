import React from "react";
import { render } from "@testing-library/react";
import CompanyDetail from "./CompanyDetail";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../../testUtils";

it("renders without crashing", () => {
  render(
    <MemoryRouter>
      <UserProvider>
        <CompanyDetail />
      </UserProvider>
    </MemoryRouter>
  );
});

it("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter initialEntries={["/company/meta"]}>
      <UserProvider>
        <Route path="/company/:handle">
          <CompanyDetail />
        </Route>
      </UserProvider>
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
