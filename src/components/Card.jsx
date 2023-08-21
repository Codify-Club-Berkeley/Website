import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Card(props) {
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
  