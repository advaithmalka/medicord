import { useContext, useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Context } from "../context";
import getUser from "../getUser";
export default function NavbarComponent() {
  const context = useContext(Context);
  const [user, setUser] = useState(getUser());
  useEffect(() => {
    setUser(getUser());
  }, [context.user]);
  return (
    <Navbar expand="lg" className="shadow-sm">
      <Link to={user ? "/dashboard" : "/"}>
        <Navbar.Brand>
          <img
            className="nav-logo d-inline-block align-top"
            src={Logo}
            alt="MediCord Logo"
          />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {user ? (
            <>
              <Link className="nav-link" to="/dashboard">
                {user.email}
              </Link>
              <div
                className="nav-link logout-link"
                onClick={context.logoutUser}
              >
                Log Out
              </div>
            </>
          ) : (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
