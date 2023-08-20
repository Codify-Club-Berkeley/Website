import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WordSpin from "../components/WordSpin";

export default function Home() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Adjust the breakpoint as needed
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
          height: "90vh",
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
          <h1>Fall 2023 Applications Open August 23!</h1>
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
        linkText="What we've been working on"
      ></Card>
      <Card
        imageSource={require("../assets/Images/General/gate.jpeg")}
        header="Within the Berkeley Community."
        body="Codify is an organization created by and for the Berkeley computer science community. We strive to provide opportunities for students to find their place in tech, explore their entrepreneurial aspirations, and use their skills to give back to their communities. We are always looking for passionate students to join our ranks and partner with organizations to work toward our mutual goals."
        link="/WorkWithUs"
        linkText="Work With Codify"
      ></Card>
    </div>
  );
}

function Card(props) {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Adjust the breakpoint as needed
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div style={{ padding: isMobileDevice ? "10px" : "20px", margin: "40px" }}>
      <div
        className={isMobileDevice ? "body-section-column" : "body-section-row"}
      >
        <img
          src={props.imageSource}
          alt="placeholder"
          style={{
            paddingRight: isMobileDevice ? "0" : "20px", // Adjust spacing for mobile
            borderRadius: isMobileDevice ? "0" : "40px", // Adjust border radius for mobile
            width: isMobileDevice ? "100%" : "300px", // Adjust width for mobile
            height: isMobileDevice ? "auto" : "200px", // Adjust height for mobile
            objectFit: "cover",
          }}
        ></img>
        <div
          style={{
            flexDirection: "column",
          }}
        >
          <h1>{props.header}</h1>
          <p>{props.body}</p>
          <Link to={props.link} className="link" onClick={scrollToTop}>
            <h2>{props.linkText}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
