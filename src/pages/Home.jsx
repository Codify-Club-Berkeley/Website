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
          <h1>Fall 2023 Applications Open Until 9/5!</h1>
          <a
            href={"https://forms.gle/rtMPqxFFkeMSxnqf7"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "24px",
              color: "purple"
            }}
          >
            Apply Now
          </a>
        </div>
      </div>

      <Card
        imageSource={require("../assets/Images/General/Beach.jpg")}
        header="A Community Of Makers..."
        body="Codify is a recently established student organization at UC Berkeley focused on bringing students together to work on impactful software projects. Our mission is to provide students with the opportunity to develop new skills, gain real-world development experience, and connect with a community of like-minded peers."
        link="/About"
        linkText="About Our Team and Mission"
      ></Card>
      <Card
        imageSource={require("../assets/Images/General/Elaine.png")}
        header="Building Exciting Things..."
        body="Every semester, Codify works on projects in web development, data analysis, mobile development, and other fields of computing that our members are passionate about. We uniquely focus on developing projects for startups and launching our own internal projects for the good of the Berkeley community."
        link="/Projects"
        linkText="Current work"
      ></Card>
      <Card
        imageSource={require("../assets/Images/General/gate.jpeg")}
        header="Within the Berkeley Community."
        body="Codify is an organization created by and for the Berkeley computer science community. We strive to provide opportunities for students to find their place in tech, explore their entrepreneurial aspirations, and use their skills to give back to their communities. We are always looking for passionate students to join our ranks and partner with organizations to work toward our mutual goals."
        link="/WorkWithUs"
        linkText="Collaborate with us"
      ></Card>
    </div>
  );
}
