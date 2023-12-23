import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import { footerLinks, lowercaseFooterLinks } from "../data/navBarLinks";
import Clickable from "../components/ClickableText";

function NewNav() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      // If scrolling down, hide the Navbar; if scrolling up, show it
      setIsVisible(!isScrolledDown || currentScrollPos === 0);

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`transition-all duration-300 ${
        isVisible
          ? "bg-navbar-purple text-white"
          : "bg-navbar-purple-transparent"
      }`}
      style={{
        paddingLeft: "60px",
        paddingRight: "60px",
      }}
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={require("../assets/Images/Codify Berkeley.png")}
          alt="error"
          style={{ height: 45, opacity: isVisible ? 1 : 0 }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{ flexDirection: "row-reverse" }}
      >
        <Nav>
          {footerLinks.map((link, index) => {
            const navLinkIsActive = () => {
              return location.pathname === "/" + lowercaseFooterLinks[index];
            };

            return (
              <Nav.Link
                as={NavLink}
                to={"/" + lowercaseFooterLinks[index]}
                className="mr-2"
                activeClassName="active-link"
                style={{
                  opacity: isVisible ? 1 : 0,
                  textDecoration: navLinkIsActive() ? "underline" : "none",
                  textDecorationColor: navLinkIsActive() ? "lavender" : "white",
                  fontSize: 16,
                }}
                key={index}
              >
                <div style={{ color: "lavender", fontSize: 16 }}>
                  <Clickable name={link} hoverColor="white" />
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
