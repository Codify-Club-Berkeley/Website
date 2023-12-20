import React from "react";
import "./About.css";
import { members } from "../data/members";
import MemberCard from "../components/MemberCard";
import { useMediaQuery } from "react-responsive";
import TextBlock from "../components/TextBlock";
import PageBanner from "../components/PageBanner";
import FilmStrip from "../components/FilmStrip"; // Make sure to import the FilmStrip component

export default function About() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Breakpoint
  });

  const imageUrls = [
    require("../assets/Images/General/Beach.jpg"),
    require("../assets/Images/General/donutGroup.JPEG"),
    require("../assets/Images/General/Hike.png"),
    require("../assets/Images/General/genmeeting.jpeg"),
    require("../assets/Images/General/selfie.jpeg"),
    require("../assets/Images/General/tabling.jpg"),
    require("../assets/Images/General/team.jpeg"),
    // Add more image URLs as needed
  ];

  //Reusable Tile component
  function Tile({ title, description }) {
    return (
      <div className="grid-item">
        <div className="pathway-title">{title}</div>
        <p>{description}</p>
      </div>
    );
  }

  const tilesData = [
    {
      title: "Impact & Growth",
      description:
        "We believe that the best way to learn is by doing. Codify provides a space for students to build real-world software projects and gain industry experience.",
    },
    {
      title: "Commmunity",
      description:
        "Beyond the projects we work on, Codify is a community. From hosting social events, tech talks, and workshops, we foster a vibrant network of friends and mentors.",
    },
    {
      title: "Inclusivity",
      description:
        "Codify was created to give opportunities to aspiring software professionals. We are committed to fostering a diverse community and welcome all passionate students.",
    },
  ];

  return (
    <div>
      <PageBanner
        backgroundImage={require("../assets/Images/General/gameGroup.JPG")}
        title="We are Codify"
      />

      <br></br>

      <TextBlock
        title="What we build is what the world sees."
        text="We are a community of developers, designers, and leaders collaborating primarily with startups, which ensures that we work on a diverse range of projects, ranging from full stack to data science and machine learning. This ensures that every member finds their niche within the technology industry. We are constantly building and maintaining new software from the ground up, uniquely allowing students to have a tangible impact on the design and architecture of the projects we work on."
        isMobile={isMobileDevice}
        marginLeft={isMobileDevice ? "0px" : "50px"}
        marginRight={isMobileDevice ? "0px" : "350px"}
      />
      <hr className="border-b-2 border-purple-500" />

      <div className="text-center">
        <h2>Our Mission & Values</h2>
        <p>
          Codify aims to foster a vibrant network of Berkeley students
          passionate about making tangible impacts with tech.
        </p>
      </div>

      <div
        className="grid-container"
        marginLeft={isMobileDevice ? "0px" : "100px"}
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {tilesData.map((tile, index) => (
          <Tile key={index} title={tile.title} description={tile.description} />
        ))}
      </div>

      <hr className="border-b-2 border-purple-500" />

      <div className="text-center">
        <h2>Our Structure</h2>
        <p>[insert leadership tree here]</p>
      </div>
      <hr className="border-b-2 border-purple-500" />

      <FilmStrip images={imageUrls} />

      <hr className="border-b-2 border-purple-500" />

      <div className="text-center">
        <h2>Our Team</h2>
      </div>
      <div className="flex flex-wrap place-content-center">
        {members.map(({ imagePath, name, title }) => (
          <MemberCard name={name} title={title} imagePath={imagePath} />
        ))}
      </div>
    </div>
  );
}
