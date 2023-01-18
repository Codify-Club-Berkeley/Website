import React from "react";
import "./Join.css";

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
            href="https://docs.google.com/forms/d/e/1FAIpQLScUygQa9aTntbk50B3yAXR7uOmgHSgjU5whRQo7RYlKK0V1AQ/viewform?usp=sf_link"
            target="_blank"
          >
            Spring 2023 Application
          </a>
        </div>
        <div className="header">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSerkXXiNEoqWCntvxFcgoEVk89eHSRQDjw3PhrL1HoxWG-6dQ/viewform?usp=sf_link"
            target="_blank"
          >
            Join our mailing list!
          </a>
        </div>

        <h1>Spring 2023 Applicaiton Timeline</h1>
        <ul>
          <li>
            <h2>January 17th: Application Released</h2>
            <p>
              Our application is short and only takes a couple of minutes to
              complete!
            </p>
          </li>
          <li>
            <h2>January 18th-January 27th: Tabling</h2>
            <p>Come talk to us on the glade to learn more about Codify.</p>
          </li>
          <li>
            <h2>January 25th: Virtual Info Session #1 7-8pm</h2>
            <p>
              Learn more about Codify's recruitment process, upcoming projects
              for the semester, and club culture, followed by an open Q and A
              session.
            </p>
          </li>
          <li>
            <h2>January 26th: Game Night and Meet and Greet 7-9pm</h2>
            <p>
              Join us in the Unit 1 Putnam Common Room for Card Games, Board
              Games, and Jackbox and get a chance to meet some Codify members.
            </p>
          </li>
          <li>
            <h2>January 30th: Virtual Info Session #2 7-8pm</h2>
            <p>
              A repeat of the information covered in Info Session #1 for those
              who could not make it.{" "}
            </p>
          </li>
          <li>
            <h2>January 31st: Applicaiton Deadline by Midnight!</h2>
            <p>
              Make sure to email us at codify.berkeley@gmail.com with any
              questions or issues!
            </p>
          </li>
          <li>
            <h2>January 30th-February 2nd: Interviews</h2>
            <p>
              After submitting your application, you will be directed to sign up
              for an in person interview to give us the chance to determine how
              you can find your place within Codify.
            </p>
          </li>
          <li>
            <h2>February 3rd: Decisions Released</h2>
          </li>
        </ul>

        <h1>Pathways into Codify</h1>
        <div class="grid-container">
          <div class="grid-item">
            <h4>Project Team</h4>
            <p>
              For students with some prior software development experience, or
              who are willing to put in the extra effort to spend time learning
              the skills needed, apply to launch right into one of our project
              teams.
            </p>
          </div>
          <div class="grid-item">
            <h4>New Member Bootcamp</h4>
            <p>
              For students with little or no prior development experience, our
              semester long curriculum will guide you though the process of
              building your own full stack application and give you the skills
              needed to succeed on one of our project teams.
            </p>
          </div>
          <div class="grid-item">
            <h4>Business and Operations</h4>
            <p>
              For students interested in a non software business role within a
              tech organization, the business and operations team functions as
              Codify's sales, marketing, public relations, talent acquisition,
              logistics and finance departments all wrapped up into one.
            </p>
          </div>
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
              Members of project teams should expect to spend anywhere from four
              to ten hours per week working depending on the project. For most
              members, Codify is their largest extracurricular commitment.
            </p>
          </li>
          <li>
            <h3>Entrepreneurial Mindset</h3>
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
            <h3>Ability to Collaborate Within a Team</h3>
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
