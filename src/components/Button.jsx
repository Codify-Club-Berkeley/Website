import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ size = "large", color = "#59544b", children, onClick }) => {
  const buttonStyle = {
    textTransform: "none",
    backgroundColor: color,
    // You can add more custom styles here
  };

  return (
    <Button
      variant="contained"
      size={size}
      onClick={onClick}
      style={buttonStyle}
    >
      {children}
    </Button>
  );
};

export default CustomButton;

// 
// #25171A
