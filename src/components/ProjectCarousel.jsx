import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import useTheme from "@mui/system/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

function ProjectCarousel({ projects }) {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projects.length;
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
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: isMobile ? 400 : 600,
          margin: "auto",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          backgroundColor: "white",
        }}
      >
        <SwipeableViews
          index={activeStep}
          onChangeIndex={(index) => setActiveStep(index)}
          enableMouseEvents
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              padding={4}
              sx={{
                flexDirection: isMobile ? "column" : "row",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {project.imgSource && (
                <img
                  src={project.imgSource}
                  alt={project.projectTitle}
                  style={{ width: 200, height: 150, objectFit: "scale-down" }}
                />
              )}
              <div>
                <Typography mt={4} ml={4} variant="h5">
                  {project.projectTitle}
                </Typography>
                <Typography mt={2} ml={4} variant="body1">
                  {project.shortDescription}
                </Typography>
                <Typography mt={2} ml={4} variant="body2">
                  Technologies: {project.technologies.join(", ")}
                </Typography>
              </div>
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
      {/* <br></br>

      <div className="text-center">
        <p className="italic">Projects Summary</p>
      </div> */}
    </div>
  );
}

export default ProjectCarousel;
