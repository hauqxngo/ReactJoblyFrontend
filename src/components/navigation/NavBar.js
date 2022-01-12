import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";

/** Shows up on every page.
 *
 * When user is logged in, shows Companies, Jobs, Profile, & Logout tabs
 * Otherwise, shows Login & Sign Up tabs
 *
 * App -> NavBar
 */

const NavBar = ({ logout }) => {
  // toggle burger menu at small dimensions
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((open) => !open);
  };

  // authentication stuff
  const { currentUser } = useContext(UserContext);

  const loggedInNav = () => {
    return (
      <div>
        {/* <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Jobly</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar> */}
        <NavItem>
          <NavLink href="/companies">Companies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/jobs">Jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/" onClick={logout}>
            Logout
          </NavLink>
        </NavItem>
        {/* </Nav>
          </Collapse>
        </Navbar> */}
      </div>
    );
  };
  const loggedOutNav = () => {
    return (
      <div>
        {/* <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Jobly</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar> */}
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/signup">Sign Up</NavLink>
        </NavItem>
        {/* </Nav>
          </Collapse>
        </Navbar> */}
      </div>
    );
  };

  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            {currentUser ? loggedInNav() : loggedOutNav()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
