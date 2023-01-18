import React from "react";

import "./Home.css";

import { Link } from "react-router-dom";

import WordSpin from "../components/WordSpin";
import { borderRadius } from "@mui/system";

export default function Home() {
  let building = "the next big thing";
  return (
    <div>
      <div className="header">
        <div style={{ display: "flex", flex: 1 }}></div>
        <h1>
          <span style={{ color: "#9641FD" }}>Codify</span> is building{" "}
          <WordSpin></WordSpin>
        </h1>
        <div style={{ display: "flex", flex: 4 }}></div>
      </div>
      <div
        style={{
          padding: "20px",
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="body-section"
          style={{
            display: "flex",
            // backgroundColor: "green",
            borderRadius: 30,
            flexDirection: "column",
            textAlign: "center",
            width: "50%",
          }}
        >
          <h1>Spring 2023 Applications Now Open!</h1>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScUygQa9aTntbk50B3yAXR7uOmgHSgjU5whRQo7RYlKK0V1AQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <h1>Apply!</h1>
          </a>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <div className="body-section">
          <img
            src={require("../assets/Images/General/Beach.jpg")}
            alt="placeholder"
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              paddingRight: "20px",
            }}
          ></img>
          <div
            style={{
              flexDirection: "column",
            }}
          >
            <h1>A Community Of Makers...</h1>
            <p>
              Codify is a newly registered UC Berkeley student organization
              focused on bringing students together to work on impactful
              software projects. Codify is an opportunity to develop new skills,
              gain real world development experience, and find a community of
              like minded students.
            </p>
            <Link to="/AboutUS" className="link">
              <h2>About Our Team and Mission</h2>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <div className="body-section">
          <img
            src={require("../assets/Images/General/Elaine.png")}
            alt="placeholder"
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              paddingRight: "20px",
            }}
          ></img>
          <div style={{ flexDirection: "column", padding: "10px" }}>
            <h1>Building Exciting Things...</h1>
            <p>
              Every semester, Codify works on projects in web development, data
              analysis, mobile development, and any other field of computing
              that our members are passionate about. We maintain a healthy mix
              of developing projects for both nonprofit and for profit clients,
              and launching our own internal projects to either develop into a
              startup or release for the good of the Berkeley community.
            </p>
            <Link to="/Projects" className="link">
              <h2> What We're Working On</h2>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <div className="body-section">
          <img
            src={require("../assets/Images/General/gate.jpeg")}
            alt="placeholder"
            style={{
              width: 200,
              height: 200,
              objectFit: "cover",
              paddingRight: "20px",
            }}
          ></img>
          <div style={{ flexDirection: "column", padding: "10px" }}>
            <h1>Within the Berkeley Community.</h1>
            <p>
              Codify is an organization created by and for the Berkeley computer
              science community. We strive to provide opportunities for students
              to find their place in tech, explore their entrepreneurial
              aspirations, and use their skills to give back to their
              communities. We are always looking for passionate students to join
              our ranks, and partner organizations to work with towards our
              mutual goals.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Link to="/WorkWithUs" className="link">
                <h2> Work With Codify</h2>
              </Link>
              <Link to="/Join" className="link">
                <h2> Apply Now!</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
