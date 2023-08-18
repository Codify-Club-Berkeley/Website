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
          You Are <span style={{ color: "#9641FD" }}>Codify</span>
        </h1>
      </div>
      <div class="p-20">
        <div className="application-info">
          <div className="app-info-title">Application Info</div>
          <div>
            Codify accepts applications for the first two weeks of every
            semester. We try our best to keep the application straightforward
            and easy, it should not take more than fifteen minutes to complete.
            After all applications have been submitted, EVERY applicant is given
            an interview, the nature of which will depend on how many
            applications we receive. If new members have prior full stack
            experience, then they are encouraged to start right into working on
            one of our many projects. Otherwise, new members are encouraged but
            not required to spend their first semester learning full stack
            development through our new member education program.
          </div>
        </div>

        <div className="big-black-title">Pathways into Codify</div>

        <div class="grid-container">
          <div class="grid-item">
            <div className="pathway-title">Project Team</div>
            <p>
              For students with some prior software development experience, or
              who are willing to put in the extra effort to spend time learning
              the skills needed, apply to launch right into one of our project
              teams.
            </p>
          </div>
          <div class="grid-item">
            <div className="pathway-title">New Member Bootcamp</div>
            <p>
              For students with little or no prior development experience, our
              semester long curriculum will guide you though the process of
              building your own full stack application and give you the skills
              needed to succeed on one of our project teams.
            </p>
          </div>
          <div class="grid-item">
            <div className="pathway-title">Business and Operations</div>
            <p>
              For students interested in a non software business role within a
              tech organization, the business and operations team functions as
              Codify's sales, marketing, public relations, talent acquisition,
              logistics and finance departments all wrapped up into one.
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
