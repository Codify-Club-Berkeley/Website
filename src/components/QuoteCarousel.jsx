import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";

const quotes = [
  {
    text: "made lots of progress on our project and was very proud and surprised by our speed and productivity. this is because everyone always showed up to meetings, everyone stayed responsible and timely on weekly homework, and we organized club dinners to strengthen the team. ",
    author: "Cameron Leung",
    avatar: require("../assets/Images/Headshots/blank.jpeg"),
  },
  {
    text: "Something that went well for me last semester was going codify! Additionally, I had a really nice project lead that was always willing to answer questions and join zoom calls, if necessary. I also got to work on building my UX skills by coming up with a template for our new website!",
    author: "Sofia Garcia",
    avatar: require("../assets/Images/Headshots/Sofia Garcia.jpeg"),
  },
  {
    text: "my project team experience was good. the size of my team was 4 members and it worked out pretty good. all of us were able to get close to each other.",
    author: "Chetan Goenka",
    avatar: require("../assets/Images/Headshots/blank.jpeg"),
  },
  {
    text: "The projects were interesting, and I am excited to work on upcoming ones. I think it is important to hold members accountable to do their share of the work, and this would contribute to the success of projects.",
    author: "Anthony Ge",
    avatar: import("../assets/Images/Headshots/blank.jpeg"),
  },
  {
    text: "Last semester, I joined the Birth By Us project team, and it was a great mission to work for. Learning more about database programs, such as MongoDB, was very interesting and I look forward to exploring more such tools and frameworks!",
    author: "Gauri Bahl",
    avatar: import("../assets/Images/Headshots/blank.jpeg"),
  },

  // Add more quotes as needed
];

function QuoteCarousel() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = quotes.length;

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
        maxWidth: 1000,
        flexGrow: 1,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add the drop shadow
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
            flexDirection="row"
            alignItems="center"
            padding={4}
            sx={{
              width: "100%",
              maxWidth: 1000,
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
