import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{padding: "1rem 0 1rem 2rem"}}>
        <Navbar.Brand href="/"><Image width="180" height="50" src="/media/smk.png"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
            <Nav.Link href="https://github.com/arijitiiest/StuckOverflow" className="mr-sm-2">Github</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
