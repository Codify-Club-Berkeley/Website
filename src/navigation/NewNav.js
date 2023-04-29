import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Route, Routes } from "react-router-dom";

//https://react-bootstrap.github.io/components/navbar/#navbar-props
function NewNav() {
  return (
    <div>
      <Navbar expand="md" fixed="top" style={{ backgroundColor: "#9741FD" }}>
        <Navbar.Brand as={Link} to="/">
          <img
            src={require("../assets/Images/Codify Berkeley.png")}
            alt="error"
            style={{ height: 60, paddingRight: 40 }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/AboutUs">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/Join">
              Join
            </Nav.Link>
            <Nav.Link as={Link} to="/Projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/Education">
              Education
            </Nav.Link>
            <Nav.Link as={Link} to="/WorkWithUs">
              Work With Us
            </Nav.Link>

            {/* 
          //Cool looking menu, not really a use for it right now
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NewNav;
