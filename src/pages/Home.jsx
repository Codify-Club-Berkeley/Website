import React from "react";

import "./Home.css";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
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
            <h1>Apply</h1>
          </a>
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

      {/* Open the modal using ID.showModal() method */}
      <button className="btn" onClick={() => window.my_modal_1.showModal()}>
        open modal
      </button>
      <dialog id="my_modal_1" className="modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
        </form>
        <form method="dialog" className="modal-backdrop bg-transparent">
          <button>close</button>
        </form>
      </dialog>
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