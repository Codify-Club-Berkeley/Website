import React from "react";
import "./About.css";
import { members } from "../data/members";
import MemberCard from "../components/MemberCard";
import { useMediaQuery } from "react-responsive";
import TextBlock from "../components/TextBlock";
import PageHeader from "../components/PageHeader";
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
      <div className="grid-item  p-4 sm:flex sm:flex-col sm:items-center">
        <div className="text-xl font-bold mb-2">{title}</div>
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
      title: "Community",
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
      <PageHeader
        title="Nice to meet you! We're Codify."
        body="We're a community of developers, designers, and leaders collaborating with startups, which ensures that we work on a diverse range of projects. What we build is what the world sees,  ranging from full stack to data science to machine learning."
      />

      <br></br>

      <div className="text-center p-4">
        <h2>Our Mission & Values</h2>
        <p>
          Codify aims to foster a vibrant network of Berkeley students
          passionate about making tangible impacts with tech.
        </p>

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

      <FilmStrip images={imageUrls} />

      <hr className="border-b-2 border-purple-500" />

      <div className="text-center p-4">
        <h2>Our Team</h2>
      </div>
      <div
        style={{ marginLeft: "5rem", marginRight: "5rem" }}
        className="flex flex-wrap justify-center"
      >
        {members.map(({ imagePath, name, title, url }, index) => (
          <MemberCard
            key={index}
            name={name}
            title={title}
            imagePath={imagePath}
            url={url}
          />
        ))}
      </div>
    </div>
  );
}
