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
          Pathways into <span style={{ color: "#9741FD" }}>Codify</span>
        </h1>
      </div>
      <div class="p-20">
        <div className="application-info">
          {/* <div className="app-info-title">Apply</div> */}
          <div>
            Applications open the first two weeks of every semester and are
            reviewed on a rolling basis, after which EVERY applicant will be
            given an interview. We strive to keep our application process
            transparent, uncomplicated, and equitable. Keep reading to see where
            you fit into Codify!
            {/* If new members have prior fullstack experience, then
            they are encouraged to join one of our many project teams. Less
            experienced admits are encouraged to join our fellowship program,
            which are projects designed to be less time-intensive and more
            scaffolded. For those without any experience, we strongly recommend
            going through our education program, a semester-long course for
            learning fullstack development. */}
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
        <br></br>
        <br></br>

        <div className="big-black-title">What we're looking for?</div>
        <div class="grid-container1">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="pathway-title1">Passion & Commitment</div>
              </div>
              <div class="flip-card-back">
                <p>
                  Members in the new member education program can expect to
                  spend four to six hours a week learning and working on their
                  project. Members of project teams should expect to spend
                  anywhere from four to ten hours per week working depending on
                  the project. For most members, Codify is their largest
                  extracurricular commitment.
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="pathway-title1">Entrepreneurial Mindset</div>
              </div>
              <div class="flip-card-back">
                <p>
                  One of the main functions of Codify is to help students
                  assemble a team to turn their side project into a fully
                  fleshed out product. We are looking for people with bold ideas
                  who want to create something impactful. In addition, we also
                  do work for small nonprofits, where our project workflow is
                  similar to that of a start up.
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
                  learning and improving on skills. We want people who ask
                  questions, make suggestions, and explore new subjects within
                  computer science.
                </p>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div className="pathway-title1">Ability to Collaborate</div>
              </div>
              <div class="flip-card-back">
                <p>
                  Most, if not all projects in Codify are team-based projects.
                  This means that regardless of which project you're on, you
                  will have to interact and work with others. Therefore, we are
                  looking for people who can communicate and collaborate
                  effectively with others in order to create a space that allows
                  for everyone to learn and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 class="text-center">Recruitment Timeline </h1>
        <Timeline />
      </div>
    </div>
  );
}
