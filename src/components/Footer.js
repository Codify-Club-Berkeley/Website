import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";
import "./Footer.css";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#9741FD",
      }}
    >
      <div
        style={{
          display: "flex",

          justifyContent: "space-around",
          flexDirection: "column",
          paddingLeft: 40,
          paddingBottom: 20,
        }}
      >
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <h2>Codify Berkeley</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "space-between",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <a
            href="https://github.com/Codify-Club-Berkeley"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <BsGithub size="40"></BsGithub>
          </a>
          <a
            href="https://www.instagram.com/codifyberkeley/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <BsInstagram size="40"></BsInstagram>
          </a>
          <a
            href="https://www.linkedin.com/company/codify-berkeley/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <BsLinkedin size="40"></BsLinkedin>
          </a>
          <a
            href="https://discord.gg/mBEnPjDSQG"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <BsDiscord size="40"></BsDiscord>
          </a>
        </div>
      </div>

      <nav
        style={{
          display: "flex",

          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="footer-link">
          <Link to="/AboutUs" className="link">
            <h3>About</h3>
          </Link>
        </div>
        <div className="footer-link">
          <Link to="/Join" className="link">
            <h3>Join</h3>
          </Link>
        </div>
        <div className="footer-link">
          <Link to="/Projects" className="link">
            <h3>Projects</h3>
          </Link>
        </div>
        <div className="footer-link">
          <Link to="/Education" className="link">
            <h3>Education</h3>
          </Link>
        </div>
        <div className="footer-link">
          <Link to="/WorkWithUs" className="link">
            <h3>Work With Us</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}
