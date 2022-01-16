import React from "react";
import UserContext from "./UserContext";

const demoUser = {
  username: "testuser",
  first_name: "test",
  last_name: "user",
  email: "test@test.com",
  photo_url: null,
};

const UserProvider = ({
  children,
  currentUser = demoUser,
  hasApplied = () => false,
}) => (
  <UserContext.Provider value={{ currentUser, hasApplied }}>
    {children}
  </UserContext.Provider>
);

export { UserProvider };
