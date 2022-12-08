import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { alignProperty } from "@mui/material/styles/cssUtils";
import Box from "@mui/material/Box";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  margin: "15px",

  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 20%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 20,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function ProjectButton(props) {
  const navigate = useNavigate();
  function handleNav() {
    if (props.pathUrl) {
      window.open(props.path, "_blank");
    } else {
      navigate(props.path);
    }
  }

  return (
    <Box
      sx={{
        alignItems: "center",

        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        minWidth: 300,
        width: "100%",
        border: "blue",
        borderWidth: 1,
      }}
    >
      <ImageButton
        focusRipple
        key={props.title}
        style={{
          width: props.width,
        }}
        onClick={() => handleNav()}
      >
        <ImageSrc style={{ backgroundImage: `url(${props.url})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            sx={{
              position: "relative",
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
            {props.title}

            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
      </ImageButton>
      <div style={{ alignItems: "center", width: 350 }}>
        <p style={{ fontSize: "14px" }}>{props.caption}</p>
      </div>
    </Box>

    //   <p>hi</p>
    // </div>
  );
}
