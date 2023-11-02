import React from "react";
import "./Home.css";
// import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WordSpin from "../components/WordSpin";
import Card from "../components/Card";


export default function Home() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Breakpoint
  });

  return (
    <div>
      {/* Large Banner */}
      <div
        className="large-banner"
        style={{
          backgroundImage: `url(${require("../assets/Images/General/sp23Group.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          height: isMobileDevice ? "43vh" : "83vh",
          display: "flex",
          alignItems: "flex-end",
          padding: isMobileDevice ? "20px" : "60px", // Adjust the padding for smaller screens
          marginTop: "-90px",
        }}
      >
        <div className="header-overlay">
          <h1
            style={{
              color: "white",
              width: "80%",
              textShadow: "5px 4px 4px rgba(1, 1, 5, 1)",
              fontSize: isMobileDevice ? "24px" : "36px", // Adjust font size for mobile
            }}
          >
            Codify is building <WordSpin />
          </h1>
        </div>
      </div>

      <div
        style={{
          paddingTop: isMobileDevice ? "10px" : "20px", // Adjust padding for mobile
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="body-section"
          style={{
            display: "flex",
            borderRadius: 30,
            flexDirection: "column",
            textAlign: "center",
            width: "80%",
          }}
        >
          <h1>Spring 2024 Applications Coming Soon!</h1>
          <a //deleted apply now and old link to fall 2023 applications
          >

          </a>
        </div>
      </div>

      <Card
        imageSource={require("../assets/Images/General/Beach.jpg")}
        header="A Community Of Makers..."
        body="We are a recently established organization at UC Berkeley bringing students together to work on impactful software projects. With us, you can develop new skills, gain real-world development experience, and connect with a community of like-minded peers."
        link="/About"
        linkText="Who we are >"
      ></Card>
      <Card
        imageSource={require("../assets/Images/General/Elaine.png")}
        header="Building Impactful Tech..."
        body="Every semester, Codify works on projects in web development, data analysis, mobile development, and other fields of computing that our members are passionate about. We uniquely focus on developing projects for startups and launching our own internal projects for the good of the community."
        link="/Projects"
        linkText="What we do >"
      ></Card>
      <Card
        imageSource={require("../assets/Images/General/gate.jpeg")}
        header="Within the Berkeley Community."
        body="Created by and for the Berkeley computer science community: we help students to find their place in tech, explore their entrepreneurial aspirations, and use their skills to give back to their communities. We are always looking for passionate students to join our ranks and partner with organizations to work toward our mutual goals."
        link="/WorkWithUs"
        linkText="Why work with us>"
      ></Card>
    </div>
  );
}
