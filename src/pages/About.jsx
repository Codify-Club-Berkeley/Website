import React from "react";
import "./About.css";
import { members } from "../data/members";
import MemberCard from "../components/MemberCard";
import { useMediaQuery } from "react-responsive";

export default function About() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Breakpoint
  });
  return (
    <div>
      <div className="header">
        <h1>
          We are <span style={{ color: "#9641FD" }}>Codify</span>
        </h1>
      </div>
      {/** <div className="underline"></div>*/}

      <div style={{padding:'20px' , marginLeft: isMobileDevice ? '0px' : '150px', marginRight: isMobileDevice ? '0px' : '150px'}}>
        <h3 style={{textIndent:'50px'}}>About Us</h3>
        <p style={{padding:'10px'}}>
          We focus on startups—not only does this ensure a diversity of projects 
          (mobile/web full stack development, data science, AI/ML) to help you to 
          find your niche in tech, but it also means that YOUR work is what makes 
          the project! Because we are building new software from the ground up, 
          what you build is what the world sees.
        </p>
      </div>
      <div style={{padding:'20px' , marginLeft: isMobileDevice ? '0px' : '150px', marginRight: isMobileDevice ? '0px' : '150px'}}>
        <h3 style={{textIndent:'30px'}}>How it all works</h3>
        <p style={{padding:'10px'}}>
          [insert leadership tree here]
        </p>
      </div>
      <div style={{padding:'20px' , marginLeft: isMobileDevice ? '0px' : '150px', marginRight: isMobileDevice ? '0px' : '150px'}}>
        <h3 style={{textIndent:'30px'}}>Our Mission</h3>
        <p style={{padding:'10px'}}>
        Codify aims to foster a vibrant network of Berkeley students passionate 
        about making tangible impacts with tech. We value inclusivity, transparency,
        impact, community, and opportunities for growth.
        </p>
      </div>
      <div style={{padding:'20px' , marginLeft: isMobileDevice ? '0px' : '150px', marginRight: isMobileDevice ? '0px' : '150px'}}>
        <h3 style={{textIndent:'50px'}}>Club Culture</h3>
        <p style={{padding:'10px'}}>
          Culture is important to us—people are what make Codify!
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Our Team</h1>
      </div>

      <div className="flex flex-wrap place-content-center">
        {members.map(({ imagePath, name, title }) => (
          <MemberCard name={name} title={title} imagePath={imagePath} />
        ))}
      </div>
    </div>
  );
}
