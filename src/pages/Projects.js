import * as React from "react";
import Box from "@mui/material/Box";
import ProjectButton from "../components/ProjectButton";

export default function ButtonBases() {
  return (
    <div>
      <div className="header">
        <h1>
          <span style={{ color: "#9641FD" }}>Codify's</span> Work
        </h1>
      </div>
      <div className="body">
        <p>
          Every semester, Codify gives members the opportunity to work on a new
          project. We don’t limit ourselves to any one domain of computer
          science or any one type of project. Most of our projects fall under
          three main categories.
        </p>
      </div>
      <h1 style={{ paddingLeft: 15 }}>Fall '22</h1>
      <p2 style={{ paddingLeft: 15 }}>Current Projects</p2>

      <Box
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          display: "flex",
          flexWrap: "wrap",
          minWidth: 300,
          width: "100%",
        }}
      >
        <ProjectButton
          url={
            "https://chabotspace.org/wp-content/uploads/2020/04/observatory-main.png"
          }
          title={"Chabot Science Center"}
          width={"30%"}
          path={"https://chabotspace.org/"}
          pathUrl={true}
        ></ProjectButton>

        <ProjectButton
          url={
            "https://www.ruthbancroftgarden.org/wp/wp-content/uploads/main-banner-img.jpg"
          }
          title={"Ruth Bancroft Gardens"}
          width={"30%"}
          path={"https://www.ruthbancroftgarden.org/"}
          pathUrl={true}
        ></ProjectButton>

        <ProjectButton
          url={
            "https://i.pinimg.com/originals/32/60/cd/3260cd08c8fc795c59af655e4dd26bf9.jpg"
          }
          title={"Punjabi Art Collective"}
          width={"30%"}
          path={"https://www.instagram.com/punjabiartcollective/"}
          pathUrl={true}
        ></ProjectButton>
      </Box>
    </div>
  );
}
