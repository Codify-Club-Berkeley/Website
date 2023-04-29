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

        <div>
          <table className="table-format">
            <tr>
              <th>Topic</th>
              <th>Links</th>
            </tr>
            <tr>
              <td>Project Formation + Getting Started</td>
              <td><a target = "_blank" href="https://docs.google.com/presentation/d/1Y_WC--wT3EhWAxofXTE5gPLbRqOCZLKm2vLdfBlVzDw/edit?usp=share_link">Slides</a></td>
            </tr>
            <tr>
              <td>Version Control, Git, and Setting Up Environment</td>
              <td><a target = "_blank" href="https://docs.google.com/presentation/d/14_6wsfcxIgkF9XzdSOe2hgfmMok4BtMVhvM9kZFiK7M/edit?usp=share_link">Slides</a></td>
            </tr>
            <tr>
              <td>React Native</td>
              <td><a target = "_blank" href="https://docs.google.com/presentation/d/18h7ak5WbQcEAyGLufj6LSVzKpKKwplfxLSw4K2mFQQg/edit?usp=share_link">Slides</a></td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  );
}
