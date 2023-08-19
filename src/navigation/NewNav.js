import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Route, Routes } from "react-router-dom";
import { footerLinks } from "../data/navBarLinks";

//https://react-bootstrap.github.io/components/navbar/#navbar-props
function NewNav() {
  return (
    <Navbar
      expand="md"
      fixed="top"
      style={{
        backgroundColor: "#9741FD",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={require("../assets/Images/Codify Berkeley.png")}
          alt="error"
          style={{ height: 60 }}
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{ flexDirection: "row-reverse" }}
      >
        <Nav className="">
          {footerLinks.map((link) => {
            return (
              <Nav.Link as={Link} to={"/" + link.replace(/\s/g, "")}>
                <h5 className="text-white">{link}</h5>
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NewNav;
