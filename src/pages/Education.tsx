import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="header text-center">
        <h1>
          Learn With <span style={{ color: "#9641FD" }}>Codify</span>
        </h1>
      </div>
      <div className="body">
        <p>
          Codify offers a semester long comprehensive course on full stack web
          and mobile development. The course is completely open access, all you
          need to do to sign up is fill out a google form. Completion of the
          course with a high enough grade guarantees acceptance into Codify for
          the following semester.
        </p>
        <p>
          If you are unsure if you are ready to join a project or fellowship
          team, or should instead complete the education program first, the best
          way to tell is to just apply for a project team. Completing the
          application will give you good practice polishing and presenting your
          work, and it will help the us determine if you are ready to join a
          project team yet. All applicants who we deny are invited to enroll in
          the education program, and will be offered a place on a project team
          the following semester if they complete the program.
        </p>
        <a
          href="https://codify-berkeley-education.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-center">
            For More Information, Check Out the Education Program
            Website
          </h3>
        </a>
        <div style={{ paddingTop: "100px" }}></div>
      </div>
    </div>
  );
}
