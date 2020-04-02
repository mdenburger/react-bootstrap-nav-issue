import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarContext from "react-bootstrap/NavbarContext";

const App = () => (
  <Navbar bg="primary">
    <Navbar.Toggle />
    <NavbarContext.Consumer>{value => console.log("NavbarContext outside Collapse", value)}</NavbarContext.Consumer>
    <Navbar.Collapse>
      <NavbarContext.Consumer>{value => console.log("NavbarContext inside Collapse", value)}</NavbarContext.Consumer>
      <Nav>
        <Nav.Link href="/foo">
          Foo
        </Nav.Link>
        <Nav.Link href="/bar">
          Bar
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default App;
