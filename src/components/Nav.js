import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Navbar, NavItem, Container, Nav } from "react-bootstrap";
import logo from "../photos/logo.png";

const NavBar = () => {
  return (
    <Navbar style={{ backgroundColor: "#202534", color: "white" }}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" style={{ height: "50px" }} />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavItem>
            {" "}
            <Link to="/" className="nav-link" style={{ color: "white" }}>
              Homepage
            </Link>
          </NavItem>
          <NavItem>
            {" "}
            <Link
              to="/Completed"
              className="nav-link"
              style={{ color: "white" }}
            >
              Completed Tasks
            </Link>
          </NavItem>
          <NavItem>
            {" "}
            <Link to="/About" className="nav-link" style={{ color: "white" }}>
              About Us
            </Link>
          </NavItem>
          <NavItem>
            {" "}
            <Link
              to="/ContactUs"
              className="nav-link"
              style={{ color: "white" }}
            >
              Contact Us
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default NavBar;
