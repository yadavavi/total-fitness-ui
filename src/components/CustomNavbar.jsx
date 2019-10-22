import React, { Component } from 'react'
import { Navbar, Nav, NavItem , Button, Form, FormControl, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

 class CustomNavbar extends Component {
  render() {
    console.log(this.props);
    return (
        <Navbar collapseOnSelect fixed="top"  bg="dark" variant="dark">
  <Navbar.Brand href="/">Total-Fitness</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
     
    </Nav>
    <Nav expand = "sm">
      <Nav.Link eventKey={1} href="/about">About</Nav.Link>
      <Nav.Link eventKey={2} href="/news">News</Nav.Link>
      <NavDropdown alignRight title="More" id="collasible-nav-dropdown" >
        <NavDropdown.Item><Link  to="/login">Log-In</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/signup">Sign-Up</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/gymlocation">Gym Location</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
export default CustomNavbar;