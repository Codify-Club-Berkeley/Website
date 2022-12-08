import React from "react";
import "./Join.css";

export default function Join() {
  return (
    <div>
      <div className="header">
        <h1>
          You Are <span style={{ color: "#9641FD" }}>Codify</span>
        </h1>
      </div>
      <div className="body">
        <p>
          Codify accepts applications for the first two weeks of every semester.
          We try our best to keep the application straightforward and easy, it
          should not take more than fifteen minutes to complete. After all
          applications have been submitted, EVERY applicant is given an
          interview, the nature of which will depend on how many applications we
          receive. If new members have prior full stack experience, then they
          are encouraged to start right into working on one of our many
          projects. Otherwise, new members are encouraged but not required to
          spend their first semester learning full stack development through our
          new member education program.
        </p>
        <div className="header">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSerkXXiNEoqWCntvxFcgoEVk89eHSRQDjw3PhrL1HoxWG-6dQ/viewform?usp=sf_link"
            target="_blank"
          >
            Join our mailing list!
          </a>
        </div>
        <h1>What we're looking for?</h1>

        <ol>
          <li>
            <h3>Passion and Commitment</h3>
            <p>
              We are all busy college students with lots going on in our lives,
              but joining Codify is a major time commitment for the semester.
              Members in the new member education program can expect to spend
              four to six hours a week learning and working on their project.
              Members of project teams can should expect to spend anywhere from
              four to ten hours per week working depending on the project. For
              most members, Codify is their largest extracurricular commitment.
            </p>
          </li>
          <li>
            <h3>Entrepenurial Mindset</h3>
            <p>
              One of the main functions of Codify is to help students assemble a
              team to turn their side project into a fully fleshed out product.
              We are looking for people with bold ideas who want to create
              something impactful.
            </p>
          </li>
          <li>
            <h3>Desire to Learn and Grow</h3>
            <p>
              Codify's first priority is the technical and professional
              development of our members. We are fully invested in helping you,
              but you have to be willing to put the effort into your own growth
              and development. We want people who ask questions, make
              suggestions, and explore new subjects within computer science.
            </p>
          </li>
          <li>
            <h3>Team Player</h3>
            <p>
              Everything that Codify does is working in teams. We are looking
              for people who can communicate and collaborate effectively, and
              who find ways to raise up their team members.
            </p>
          </li>
        </ol>

        <p></p>
      </div>
    </div>
  );
}
