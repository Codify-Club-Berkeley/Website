import React from "react";
import "./About.css";
import { members } from "../data/members";
import MemberCard from "../components/MemberCard";

export default function About() {
  return (
    <div>
      <div className="header">
        <h1>
          We are <span style={{ color: "#9641FD" }}>Codify</span>
        </h1>
      </div>
      {/** <div className="underline"></div>*/}

      <div className="body">
        <h1>Our Mission</h1>
        <p>
          Founded to channel the boundless energy of Berkeley's Computer Science
          community, Codify aims to cultivate a community of students passionate
          about working in the dynamic and fast-paced world of emerging tech
          startups. Our goal is to merge students' limitless creativity and
          ambition to craft a variety of software projects that make a tangible
          impact on the real world.
        </p>
      </div>
      <div className="body">
        <h1>Our Club</h1>
        <p>
          Codify has three main branches that help us achieve our mission. Our
          executive branch organizes and runs the club, our education branch
          helps teach new members all the skills they need to be successful
          within Codify, and the bulk of the club is made up by the projects
          branch, which are actively working on projects in teams of four to
          eight.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Our Team</h1>
      </div>

      <div className="flex flex-wrap place-content-center">
        {members.map(({ imagePath, name, title }) => (
          <MemberCard name={name} title={title} imagePath={imagePath} />
        ))}
      </div>
    </div>
  );
}
