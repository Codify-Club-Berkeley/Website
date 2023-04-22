import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { Route, Switch } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
//Thank you Web Dev Simplified! ;) https://www.youtube.com/watch?v=SLfhMt5OUPI

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav
      className="nav"
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#9741FD",
        justifyContent: "space-between",
        padding: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
        }}
      >
        <Link to="/">
          <div>
            <img
              src={require("../assets/Images/Codify Berkeley.png")}
              alt="error"
              style={{ height: 80 }}
            ></img>
          </div>
        </Link>
      </div>

      <RightBar></RightBar>
    </nav>
  );
}

function RightBar({}) {
  //https://blog.logrocket.com/using-react-responsive-to-implement-responsive-design/
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  if (isMobileDevice) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingRight: 20,
        }}
      >
        <Link className="link" to="/AboutUs">
          <h3>About</h3>
        </Link>

        <Link className="link" to="/Join">
          <h3>Join</h3>
        </Link>
        <Link className="link" to="/Projects">
          <h3>Projects</h3>
        </Link>
        <Link className="link" to="/Education">
          <h3>Education</h3>
        </Link>
        <Link className="link" to="/WorkWithUs">
          <h3>Work With Us</h3>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Menu className={"my-menu"} noOverlay>
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
