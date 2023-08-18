import React from "react";
import "./About.css";
import Grid from "../components/Grid.jsx";
import Quote from "../components/Quote";

const members = [
  {
    imagePath: require("../assets/Images/Headshots/Aidan Sunbury.png"),
    name: "Aidan Sunbury",
    title: "President",
  },
  {
    imagePath: require("../assets/Images/Headshots/Elaine Shu.jpeg"),
    name: "Elaine Shu",
    title: "Vice President",
  },
  {
    imagePath: require("../assets/Images/Headshots/Dhruv Agarwal.jpeg"),
    name: "Dhruv Agarwal",
    title: "Vice President",
  },
  {
    imagePath: require("../assets/Images/Headshots/Rayna Bhattacharyya.jpeg"),
    name: "Rayna Bhattacharyya",
    title: "Vice President",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Logan Krause",
    title: "Vice President of Operations",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Michael Wang",
    title: "LEAP MDUSD Project Lead",
  },
  {
    imagePath: require("../assets/Images/Headshots/Nemerjit Singh.jpg"),
    name: "Nemerjit Sigh",
    title: "External Director",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Shruti Sathi",
    title: "Education Director",
  },
  {
    imagePath: require("../assets/Images/Headshots/Ayush Goel.png"),
    name: "Ayush Goel",
    title: "Posto Project Lead",
  },
  {
    imagePath: require("../assets/Images/Headshots/Stacey Lei.jpg"),
    name: "Stacey Lei",
    title: "Ruth Bancroft Garden Project Lead",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Timothe Kasriel",
    title: "Scribble AI Project Lead",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Michael Wang",
    title: "LEAP MDUSD Project Lead",
  },

  {
    imagePath: require("../assets/Images/Headshots/Sydney Tsai.jpeg"),
    name: "Sydney Tsai",
    title: "Developer",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Andrea Lou",
    title: "Developer",
  },

  {
    imagePath: require("../assets/Images/Headshots/Aanvi Kothari.jpeg"),
    name: "Aanvi Kothari",
    title: "Developer",
  },

  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Leo Huang",
    title: "Developer",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Faisal Al-Senani",
    title: "Developer",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Gauri Bahl",
    title: "Developer",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Aathreya Kadambi",
    title: "Developer",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Anshul Jambula",
    title: "Developer",
  },

  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Saloni Khule",
    title: "Developer",
  },
  {
    imagePath: require("../assets/Images/Headshots/blank.jpeg"),
    name: "Pranav Karthik",
    title: "Developer",
  },
];

export default function About() {
  return (
    <div>
      <div className="header">
        <h1>
          About <span style={{ color: "#9641FD" }}>Codify</span>
        </h1>
      </div>
      {/** <div className="underline"></div>*/}

      <div className="body">
        <h1>Our Mission</h1>
        <p>
          Codify was founded to harvest the boundless energy and creativity of
          the Berkeley Computer Science community. Thousands of passionate
          students want to gain real world experience working on projects, but
          individual projects are more susceptible to roadblocks and are more
          likely to be abandoned after completion. Codify harnesses this passion
          for creating and puts it behind efforts to build and maintain projects
          with real world impact. We give our members the skills and experience
          they need to start a company or land their dream job.{" "}
        </p>
      </div>
      <div className="body">
        <h1>Our Club</h1>
        <p>
          Codify has three main branches that help us achieve our mission. Our
          execuitive branch organizes and runs the club, our education branch
          helps teach new members all the skills they need to be successful
          within Codify, and the bulk of the club is made up by the projects
          branch, which are actively working on projects in teams of four to
          eight.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Our Team</h1>
      </div>

      <div className="grid-containerw">
        {members.map(({ imagePath, name, title }) => (
          <div class="grid-item">
            <Quote name={name} title={title} imagePath={imagePath}></Quote>
          </div>
        ))}
      </div>
    </div>
  );
}
