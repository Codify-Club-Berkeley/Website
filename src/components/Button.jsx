import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ size = "large", children, onClick }) => {
  const buttonStyle = {
    textTransform: "none", // This will prevent text transformation to uppercase
  };

  return React.createElement(
    Button,
    {
      variant: "contained",
      color: "inherit",
      size: size,
      onClick: onClick,
      style: buttonStyle,
    },
    children
  );
};

export default CustomButton;
