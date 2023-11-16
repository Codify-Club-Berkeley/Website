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
    <div className="marginTop: -90px">
      {" "}
      {/* Add overflow-hidden to prevent any potential margin issues */}
      {/* Large Banner */}
      <div
        className="large-banner relative flex items-center justify-center bg-cover bg-center w-full "
        style={{
          backgroundImage: `url(${require("../assets/Images/General/Fa23Group.jpeg")})`,
          marginTop: "-60px", // Adjust marginTop as needed
          height: "35rem",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="z-10 header-overlay text-white body-section flex flex-col text-center w-75 text-shadow-lg">
          <h1 className="text-highlight-yellow text-4xl md:text-6xl">
            What will you build?
          </h1>
          <br></br>
          <h5 className="font-normal">
            Codify puts your finger on the pulse of Silicon Valley startup
            culture, fostering a community of Berkeley students passionate about
            working in the vibrant world of fledgling software companies.
          </h5>
        </div>
      </div>
      <Card
        imageSource={require("../assets/Images/General/donut social close.JPEG")}
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
