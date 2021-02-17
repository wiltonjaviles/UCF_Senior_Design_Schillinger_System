import '.././Style.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import isAuthenticated from '.././components/authUser';

function Navigation() {
  isAuthenticated();
  return (
    <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand>
          <Link to="/" className="nav-link-item">
            <h5>Schillinger System</h5>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="mr-auto">
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
            <Nav.Link>
              <Link to="/account" className="nav-link-item">Account</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
