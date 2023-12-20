import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Route, Routes } from "react-router-dom";
import { footerLinks, lowercaseFooterLinks } from "../data/navBarLinks";
import Clickable from "../components/ClickableText";

//https://react-bootstrap.github.io/components/navbar/#navbar-props
function NewNav() {
  return (
    <Navbar
      expand="md"
      fixed="top"
      style={{
        backgroundColor: "#4d0e96",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        paddingLeft: "60px",
        paddingRight: "60px",
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
          {footerLinks.map((link, index) => {
            return (
              <Nav.Link
                as={Link}
                to={"/" + lowercaseFooterLinks[index]}
                className="mr-2"
              >
                <div style={{ color: "white", fontSize: 18 }}>
                  <div style={{ color: "lightgray", fontSize: 18 }}>
                    <Clickable name={link} hoverColor="white"></Clickable>
                  </div>
                </div>
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NewNav;
