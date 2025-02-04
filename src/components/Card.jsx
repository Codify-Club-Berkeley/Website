import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Button from "../components/Button";

export default function Card(props) {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Adjust the breakpoint as needed
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div
      style={{
        padding: isMobileDevice ? "10px" : "10px",
        margin: "20px",
        display: "flex",
        width: "90%",
        flexDirection: isMobileDevice ? "column" : "row",
        alignItems: "center", // Center vertically
      }}
    >
      <div
        className={isMobileDevice ? "body-section-column" : "body-section-row"}
      >
        <img
          src={props.imageSource}
          alt="placeholder"
          style={{
            paddingRight: isMobileDevice ? "0" : "60px", // Adjust spacing for mobile
            borderRadius: isMobileDevice ? "0" : "5px", // Adjust border radius for mobile
            width: isMobileDevice ? "100%" : "500px", // Adjust width for mobile
            height: isMobileDevice ? "auto" : "300px", // Adjust height for mobile
            objectFit: "cover",
          }}
        ></img>
        <div
          style={{
            flexDirection: "column",
          }}
        >
          <div
            style={{
              flexDirection: "column",
              padding: "20px",
            }}
          >
            <h3 className="text-codify-purple">{props.header}</h3>
            <p>{props.body}</p>
            <Link to={props.link} className="link" onClick={scrollToTop}>
              <h3 style={{ color: "black" }}>
                <Button>{props.linkText}</Button>
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
