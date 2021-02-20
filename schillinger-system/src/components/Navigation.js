import '.././Style.css';
import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import isAuthenticated from '.././components/authUser';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const BASE_URL = 'http://localhost:5000/'

function Navigation() {

  var _session = localStorage.getItem('session_token');
  var session = JSON.parse(_session);

  if (session != null){
    var logoutToken = session.token;
  }
  else {
    var logoutToken = '';
  }

  const [message,setMessage] = useState('');

  const doLogout = async event => {
    event.preventDefault();

    if (logoutToken === '') {
      alert("Error: Cannot log out with no session active!");
    }
    else {
      var js = '{"token":"' + logoutToken + '"}';

      try {

        const response = await fetch(BASE_URL + 'api/logout',
        {
          method:'POST',
          body:js,
          headers:
          {
            'Content-Type': 'application/json'
          }
        });

        var res = JSON.parse(await response.text());

        if (res.error != '') {
          alert(res.error);
          window.location.href = '/';
        }
        else {
          var session = {token:res.jwt}
          localStorage.removeItem('user_data');
          localStorage.removeItem('session_token');
          localStorage.setItem('session_token', JSON.stringify(session));

          window.location.href = '/';
        }
      }
      catch(e) {
        alert(e.toString());
        return;
      }
      console.log(message);
    }
  }
  
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
              <NavDropdown.Item href="/account" className="nav-dropdown">Sign in / Sign up</NavDropdown.Item>
              <NavDropdown.Item onClick={doLogout}>Log out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
