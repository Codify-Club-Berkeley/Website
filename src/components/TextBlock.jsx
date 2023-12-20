import React from "react";

const TextBlock = ({ title, text, isMobile, marginLeft, marginRight }) => (
  <div
    style={{
      padding: "20px",
      marginLeft: isMobile ? "0px" : marginLeft,
      marginRight: isMobile ? "0px" : marginRight,
    }}
  >
    <h3 style={{ textIndent: isMobile ? "0px" : "0px" }}>{title}</h3>
    <p style={{ padding: "10px" }}>{text}</p>
  </div>
);

export default TextBlock;
