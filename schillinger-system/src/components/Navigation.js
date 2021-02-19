import '.././Style.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Navigation() {
  
  return (
    <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link to="/" className="nav-link-item">
            <h5>Schillinger System</h5>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="ml-auto mr-5 px-3">
            <Nav.Link>
              <Link to="/" className="nav-link-item">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="nav-link-item">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contents" className="nav-link-item">Contents</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/recordings" className="nav-link-item">Recordings</Link>
            </Nav.Link>
            <NavDropdown title="Account" id="nav-dropdown">
              <NavDropdown.Item href="/account" >Sign in / Sign up</NavDropdown.Item>
              <NavDropdown.Item id="nav-dropdown-logout">Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
