import React from "react";
import "./Join.css";
import { useMediaQuery } from "react-responsive";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Timeline from "../components/Timeline";
import TextBlock from "../components/TextBlock";
import PageHeader from "../components/PageHeader";
import QuoteCarousel from "../components/QuoteCarousel";

//Reusable Tile component
function Tile({ title, description }) {
  return (
    <div className="grid-item">
      <div className="pathway-title">{title}</div>
      <p>{description}</p>
    </div>
  );
}

//Reusable FlipCard component
function FlipCard({ frontTitle, backContent }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="pathway-title1">{frontTitle}</div>
        </div>
        <div className="flip-card-back">
          <p>{backContent}</p>
        </div>
      </div>
    </div>
  );
}

export default function Join() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Breakpoint
  });

  const tilesData = [
    {
      title: "1. Attend Recruiting Events",
      description:
        "Learn more about Codify and meet our members! We will be hosting a variety of events, including infosessions, mixers, and socials.",
    },
    {
      title: "2. Written Application",
      description:
        "Complete a brief application to tell us more about yourself and your interests. You will be asked to indicate interest in a particular project.",
    },
    {
      title: "3. Solo Interview",
      description:
        "Meet with interviewers for a 20-minute solo interview to discuss your application and your goals for the semester.",
    },
  ];

  const flipCardsData = [
    {
      frontTitle: "Commitment",
      backContent:
        "Commitment is the backbone of the Codify community—what you put in is what you get out, both socially and technically. Being consistent and dedicated to your workload is what helps us amplify our collective impact.",
    },
    {
      frontTitle: "Entrepreneurial Curiosity",
      backContent:
        "Since Codify mainly works in the fast-paced world of tech startups, we are looking for people who want to experience building something impactful from the ground up.",
    },
    {
      frontTitle: "Desire to Improve",
      backContent:
        "Codify's first priority is the technical and professional development of our members. However, you have to be willing to put the effort into your own growth by committing time to learning and improving on skills.",
    },
    {
      frontTitle: "Collaboration",
      backContent:
        "Most, if not all projects in Codify are team-based projects. We are looking for people who can communicate and collaborate effectively with others in order to create a space that allows for everyone to learn and grow together.",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Join Us!"
        body=" Recruitment for Spring 2024 consists of two rounds: a written
            application and then a solo interview. We are looking for students
            who are passionate about learning and committed to growth. We strive
            to keep our application process transparent, uncomplicated, and
            equitable. Keep reading to see where you fit into Codify!"
      />

      <div className="p-4">
        <TextBlock
          title="A Week in the Life..."
          text="Dedicate 6-8 hours weekly to Codify, including general meetings, project team meetings, project work, and socials.
Represent Codify during recruitment by tabling, meeting prospective members, and attending recruitment events.
Stay active and responsive on Discord and via email when communicating with team members and your Project Lead (PL).
Make consistent progress on tasks, commit code, and submit pull requests to GitHub each sprint.
Attend mandatory Codify events, including Orientation and General Meetings.
Attend weekly project team meetings to address blockers and adhere to project timelines.
Provide a 24-hour prior notice to your project team for any unavoidable absence
"
          isMobile={isMobileDevice}
          marginLeft={isMobileDevice ? "0px" : "100px"}
          marginRight={isMobileDevice ? "0px" : "200px"}
        />

        {/* <div className="application-info">
          <div>
            Recruitment for Spring 2024 consists of two rounds: a written
            application and then a solo interview. We are looking for students
            who are passionate about learning and committed to growth. We strive
            to keep our application process transparent, uncomplicated, and
            equitable. Keep reading to see where you fit into Codify!
          </div>
        </div>
        <br></br> */}

        <hr className="border-b-2 border-purple-500" />

        <div className="text-center p-8">
          <h2>Testimonials</h2>
          <div className="flex items-center justify-center">
            <QuoteCarousel />
          </div>
        </div>
        <hr className="border-b-2 border-purple-500" />

        <div className="text-center p-8">
          <h2>A 3-Step Process</h2>
          <div
            className="grid-container"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {tilesData.map((tile, index) => (
              <Tile
                key={index}
                title={tile.title}
                description={tile.description}
              />
            ))}
          </div>
        </div>
        <hr className="border-b-2 border-purple-500" />

        <br></br>
        <hr className="border-b-2 border-purple-500" />

        <div className="big-black-title">Recruitment Timeline</div>
        <Timeline />

        <br></br>
        <hr className="border-b-2 border-purple-500" />

        <div className="big-black-title">What we're looking for</div>
        <div
          className="grid-container1"
          style={{ display: "flex", flexWrap: "wrap", placeContent: "center" }}
        >
          {flipCardsData.map((card, index) => (
            <FlipCard
              key={index}
              frontTitle={card.frontTitle}
              backContent={card.backContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
