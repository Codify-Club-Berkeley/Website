import { Link } from "react-router-dom";
import "./Navbar.css";

//Thank you Web Dev Simplified! ;) https://www.youtube.com/watch?v=SLfhMt5OUPI

function NavBar() {
  return (
    <nav
      className="nav"
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#9741FD",
        padding: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 2,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link to="/Website">
          <div>
            <img
              src={require("../assets/Images/Codify Berkeley.png")}
              alt="error"
              style={{ height: 80 }}
            ></img>
          </div>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",

          justifyContent: "space-around",
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
    </nav>
  );
}

export default NavBar;
