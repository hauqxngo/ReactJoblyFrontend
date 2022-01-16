import React from "react";
import { render } from "@testing-library/react";
import JobDetail from "./JobDetail";
import { UserProvider } from "../../testUtils";

it("matches snapshot", () => {
  let job = { title: "Software Engineer", salary: 1000000, equity: 10 };
  const { asFragment } = render(
    <UserProvider>
      <JobDetail job={job} />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});
