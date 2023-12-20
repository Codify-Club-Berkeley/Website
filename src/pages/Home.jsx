import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className="marginTop: -90px">
      <div
        className="large-banner relative flex items-center justify-center bg-cover bg-center w-full fade-in"
        style={{
          backgroundImage: `url(${require("../assets/Images/General/Fa23Group.jpeg")})`,
          marginTop: "-120px",
          height: "35rem",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        <div className="z-10 header-overlay text-white body-section flex flex-col text-center w-75 text-shadow-lg">
          <h1 className="text-wh text-5xl md:text-5xl p-4">
            What will you build?
          </h1>

          {/* Flex container for buttons */}
          <div className="flex justify-center">
            <Link to="/Join" className="mr-4">
              <Button>Learn More</Button>
            </Link>

            <Link to="/Join">
              <Button>Apply</Button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        {/* Card 1 */}
        <Card
          imageSource={require("../assets/Images/General/donutClose.JPEG")}
          header="A Community of Makers"
          body="We are a tight-knit community bringing students together to work on impactful software projects. With us, you will gain real-world development experience, find your place in tech, and connect with a community of like-minded peers."
          link="/About"
          linkText="Our Team & Mission"
        ></Card>

        {/* Card 2 */}
        <Card
          imageSource={require("../assets/Images/General/Elaine.png")}
          header="Building Impactful Tech"
          body="Every semester, Codify works on projects in web development, data analysis, mobile development, and other fields of computing that our members are passionate about. We uniquely focus on developing projects for startups and launching our own internal projects for the good of the community."
          link="/Projects"
          linkText="View Projects"
        ></Card>

        {/* Card 3 */}
        <Card
          imageSource={require("../assets/Images/General/gate.jpeg")}
          header="Within the Berkeley Community."
          body="Created by and for the Berkeley computer science community. We help students explore their entrepreneurial aspirations and use their skills to give back to their communities. We are always looking for passionate students to join our ranks and partner with organizations to work toward our mutual goals."
          link="/WorkWithUs"
          linkText="Work with Us"
        ></Card>
      </div>
    </div>
  );
}
