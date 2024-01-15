import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import useTheme from "@mui/system/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { quotes } from "../data/memberTestimonials";

function QuoteCarousel() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = quotes.length;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? maxSteps - 1 : prevActiveStep - 1
    );
  };

  return (
    <Box
      sx={{
        width: "100%", // Full width
        maxWidth: 1000, // Adjust the maximum width as needed
        margin: "auto", // Center the box
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add the drop shadow
        backgroundColor: "white",
      }}
    >
      <SwipeableViews
        index={activeStep}
        onChangeIndex={(index) => setActiveStep(index)}
        enableMouseEvents
      >
        {quotes.map((quote, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            padding={4}
            sx={{
              flexDirection: isMobile ? "column" : "row",
              width: "100%",
              boxSizing: "border-box", // Ensure padding is included in the width
            }}
          >
            <Avatar
              alt={quote.author}
              src={quote.avatar}
              sx={{ width: 100, height: 100 }}
            />
            <Typography mt={4} ml={4} variant="body2">
              {quote.author}
            </Typography>
            <Typography mt={4} ml={4} variant="body1">
              {quote.text}
            </Typography>
          </Box>
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={maxSteps <= 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={maxSteps <= 1}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default QuoteCarousel;
