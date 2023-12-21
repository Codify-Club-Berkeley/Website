import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({
  size = "large",
  color = "#59544b",
  children,
  onClick,
}) => {
  const buttonStyle = {
    textTransform: "none",
    backgroundColor: color,
    border: "1px solid white",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "#25171A", // Change the color on hover
      // Add more hover effect styles here
    },
  };

  return (
    <Button
      variant="contained"
      size={size}
      onClick={onClick}
      sx={buttonStyle} // Use `sx` instead of `style` for Material-UI components
    >
      {children}
    </Button>
  );
};

export default CustomButton;
