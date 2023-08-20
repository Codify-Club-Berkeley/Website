import React from "react";

import "./Home.css";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WordSpin from "../components/WordSpin";
import { borderBottom, borderRadius } from "@mui/system";
// import background from "../assets/Images/General/sp23Group.jpg"
export default function Home() {
  let building = "the next big thing";
  return (
    <div>
      {/* Large Banner */}
      <div
        className="large-banner"
        style={{
          backgroundImage: `url(${require("../assets/Images/General/sp23Group.jpg")})`, // Use your background image here
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh", // Set the height to 100% of the viewport height
          display: "flex",
          alignItems: "end",
          padding: "60px",
          marginTop: "-90px",
        }}
      >
        <div className="header-overlay">
          <h1
            style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)"
            }}
          >
            Codify is building <WordSpin />
          </h1>
        </div>
      </div>

      <div className="header">
        <div style={{ display: "flex", flex: 1 }}></div>
        {/* <h1>
          <span style={{ color: "#9641FD" }}>Codify</span> is building{" "}
          <WordSpin></WordSpin>
        </h1> */}
        <div style={{ display: "flex", flex: 4 }}></div>
      </div>

      <div
        style={{
          padding: "70px",
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
          <h1>Fall 2023 Applications Open August 23!</h1>
{/* //APPLICATION LINK
          <a
            href="https://docs.google.com/forms/d/1-poyysErroe8tXtXt16q6v4y6ofw2LC49EFBaqQSoW0/edit?usp=drive_web"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <h1>Apply Here</h1>
          </a> */}
        </div>
      </div>

      <Card
        imageSource={require("../assets/Images/General/Beach.jpg")}
        header="A Community Of Makers..."
        body="Codify is a newly registered UC Berkeley student organization
              focused on bringing students together to work on impactful
              software projects. Codify is an opportunity to develop new skills,
              gain real world development experience, and find a community of
              like minded students."
        link="/AboutUS"
        linkText="About Our Team and Mission"
      ></Card>
      <Card
        imageSource={require("../assets/Images/General/Elaine.png")}
        header="Building Exciting Things..."
        body="Every semester, Codify works on projects in web development, data
        analysis, mobile development, and any other field of computing
        that our members are passionate about. We maintain a healthy mix
        of developing projects for both nonprofit and for profit clients,
        and launching our own internal projects to either develop into a
        startup or release for the good of the Berkeley community."
        link="/Projects"
        linkText="What we've been working on"
      ></Card>
      <Card
        imageSource={require("../assets/Images/General/gate.jpeg")}
        header="Within the Berkeley Community."
        body="Codify is an organization created by and for the Berkeley computer
        science community. We strive to provide opportunities for students
        to find their place in tech, explore their entrepreneurial
        aspirations, and use their skills to give back to their
        communities. We are always looking for passionate students to join
        our ranks, and partner organizations to work with towards our
        mutual goals."
        link="/WorkWithUs"
        linkText="Work With Codify"
      ></Card>
    </div>
  );
}

function Card(props) {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  return (
    <div style={{ padding: "20px" }}>
      <div
        className={isMobileDevice ? "body-section-row" : "body-section-column"}
      >
        <img
          src={props.imageSource}
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
          <h1>{props.header}</h1>
          <p>{props.body}</p>
          <Link to={props.linkLocation} className="link">
            <h2>{props.linkText}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
