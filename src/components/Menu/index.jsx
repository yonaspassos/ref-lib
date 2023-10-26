import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Menu = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">Menu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/"}>
              <Nav.Link href="/">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/cards"}>
              <Nav.Link href="/cards">Cards</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
