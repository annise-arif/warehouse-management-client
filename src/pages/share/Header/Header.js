import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase-init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/inventory">
                Inventory
              </Nav.Link>
            </Nav>
            <Nav>
              {user && <>
                <Nav.Link as={Link} to="/manageitems">
                Manage Items
              </Nav.Link>
              <Nav.Link as={Link} to="/additem">
                Add Item
              </Nav.Link>
              <Nav.Link as={Link} to="/myitems">
                My Items
              </Nav.Link>
              </>}
              {user ?
                <div>
                  
                  <button
                    className="btn btn-link text-decoration-none text-white"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                  <small>{user.email}</small>
                </div>
               : 
                <>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    LogIn
                  </Nav.Link>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
