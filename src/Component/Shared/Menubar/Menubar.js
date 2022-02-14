import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Menubar = () => {
  const { users, logOut } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
         <span className="text-info"> <i class="fa-2x fab fa-gripfire"></i>Greninja Trip </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
            {users.email && (
              <NavDropdown
                title={users.displayName}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/myOrder">My Trips</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/manageOrder">
                  Manage All Trips
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/addTours">
                  Host A Trip
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {users.email ? (
              <Button className="btn btn-info" onClick={logOut}>
                {" "}
                Logout{" "}
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
