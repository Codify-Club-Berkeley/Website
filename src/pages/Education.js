import React from "react";
import "./Education.css";

export default function Education() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="header">
        <h1>
          Learn With <span style={{ color: "#9641FD" }}>Codify</span>
        </h1>
      </div>
      <div className="body">
        <p>
          New Codify members with minimal programming experience have the option
          to spend one semester completing our new member education program. The
          goal of the new member education program is to prepare new Codify
          members to work on project teams. The semester long program covers all
          the concepts needed to build, test, and deploy a full stack
          application. The program walks teams of two through the planning,
          development, and deployment of their own full stack project.
        </p>
        <div style={{ paddingTop: "100px" }}></div>
        <div className="title">
          <h1>Check back soon for updates to our curriculum!</h1>
        </div>
        <div style={{ paddingTop: "100px" }}></div>
      </div>
    </div>
  );
}
