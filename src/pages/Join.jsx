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
      title: "Project Team",
      description:
        "For those with a strong foundation in full stack development and want to gain experience working at industry standard, which comes with team collaboration and stricter time commitments.",
    },
    {
      title: "Fellowship",
      description:
        "For individuals looking to explore real-world projects and are dedicated to investing time in learning. Students will collaborate in teams, working on less complex projects.",
    },
    {
      title: "Education Program",
      description:
        "For students new to development, our semester-long curriculum will guide you in creating your full-stack application and equip you with the skills to excel in our project teams.",
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

      <br></br>

      <div className="text-center p-8">
        <h2>Testimonials</h2>
        <div className="flex items-center justify-center">
          <QuoteCarousel />
        </div>
      </div>

      {/* <TextBlock
        title="hello"
        text="this is a test"
        isMobile={isMobileDevice}
        marginLeft={isMobileDevice ? "0px" : "50px"}
        marginRight={isMobileDevice ? "0px" : "350px"}
      /> */}

      <div className="p-20">
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
        <div className="big-black-title">Finding your fit</div>
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

        <br></br>

        {/* an updated timeline will go up during recruitment season */}
        <div className="big-black-title">Recruitment Timeline</div>
        <Timeline />

        <br></br>
        <br></br>

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
