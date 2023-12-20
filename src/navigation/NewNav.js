import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Route, Routes } from "react-router-dom";
import { footerLinks, lowercaseFooterLinks } from "../data/navBarLinks";
import Clickable from "../components/ClickableText";
import { NavLink, useLocation } from "react-router-dom";

//https://react-bootstrap.github.io/components/navbar/#navbar-props
function NewNav() {
  const location = useLocation();
  return (
    <Navbar
      expand="md"
      fixed="top"
      className="sticky-top"
      style={{
        backgroundColor: "#8658D0",
        // boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        paddingLeft: "60px",
        paddingRight: "60px",
      }}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={require("../assets/Images/Codify Berkeley.png")}
          alt="error"
          style={{ height: 50 }}
        ></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{ flexDirection: "row-reverse" }}
      >
        <Nav className="">
          {footerLinks.map((link, index) => {
            const navLinkIsActive = () => {
              // Check if the current location matches the NavLink's "to" prop
              return location.pathname === "/" + lowercaseFooterLinks[index];
            };

            return (
              <Nav.Link
                as={NavLink}
                to={"/" + lowercaseFooterLinks[index]}
                className="mr-2"
                activeClassName="active-link"
                style={{
                  textDecoration: navLinkIsActive() ? "underline" : "none",
                  color: "white",
                  fontSize: 18,
                }}
              >
                <div style={{ color: "lavender", fontSize: 18 }}>
                  <Clickable name={link} hoverColor="white"></Clickable>
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
