import React from "react";
import "./Join.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Timeline from "../components/Timeline";

//Create a carousel for these items
//https://www.npmjs.com/package/react-responsive-carousel

export default function Join() {
  return (
    <div>
      <div className="header">
        <h1>
          Welcome to <span style={{ color: "#9741FD" }}>Codify</span>
        </h1>
      </div>
      <div class="p-20">
        <div className="application-info">
          <div>
            Applications open the first two weeks of every semester and are
            reviewed on a rolling basis, after which EVERY applicant will be
            given an interview. We strive to keep our application process
            transparent, uncomplicated, and equitable. Keep reading to see where
            you fit into Codify!
          </div>
        </div>
        <br></br>
        <div className="big-black-title">Finding your fit</div>
        <div class="grid-container">
          <div class="grid-item">
            <div className="pathway-title">Project Team</div>
            <p>
              For those with a strong foundation in full stack development and
              want to gain experience working at industry standard, which comes
              with team collaboration and stricter time commitments.
            </p>
          </div>
          <div class="grid-item">
            <div className="pathway-title">Fellowship</div>
            <p>
              For those seeking an introduction to real-life projects and are
              willing to put in the time to learn. Students will collaborate in
              teams, tackling simpler projects.
            </p>
          </div>
          <div class="grid-item">
            <div className="pathway-title">Education Program</div>
            <p>
              For students new to development, our semester-long curriculum will
              guide you in creating your full-stack application and equip you
              with the skills to excel in our project teams.
            </p>
          </div>
        </div>

        <br></br>

        <div className="big-black-title">Recruitment Timeline</div>
        <Timeline />

        <br></br>
        <br></br>

        <div className="big-black-title">What we're looking for</div>
        <div class="grid-container1">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="pathway-title1">Commitment</div>
              </div>
              <div class="flip-card-back">
                <p>
                  Commitment is the backbone of the Codify community—what you
                  put in is what you get out, both socially and technically.
                  Being consistent and dedicated to your workload is what helps
                  us amplify our collective impact.
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="pathway-title1">Entrepreneurial Curiosity</div>
              </div>
              <div class="flip-card-back">
                <p>
                  Since Codify mainly works in the fast-paced world of tech
                  startups, we are looking for people who want to experience
                  building something impactful from the ground up.
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="pathway-title1">Desire to Improve</div>
              </div>
              <div class="flip-card-back">
                <p>
                  Codify's first priority is the technical and professional
                  development of our members. However, you have to be willing to
                  put the effort into your own growth by committing time to
                  learning and improving on skills.
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="pathway-title1">Collaboration</div>
              </div>
              <div class="flip-card-back">
                <p>
                  Most, if not all projects in Codify are team-based projects.
                  We are looking for people who can communicate and collaborate
                  effectively with others in order to create a space that allows
                  for everyone to learn and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
