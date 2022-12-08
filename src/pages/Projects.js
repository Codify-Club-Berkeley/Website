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
          three main categories: internal, non-profit client, and for-profit
          client. For-profit clients pay Codify to complete a project that
          assists their business. Non-profit client projects are completed
          pro-bono for an organization with a mission that Codify supports.
          Internal projects are either an individual member's personal passion
          project, or a startup being launched through the club.
        </p>
        <h1>Continued Support</h1>
        <p>
          Unlike many other organizations, we only work on projects that are
          likely to result in a product that people will continue to use for
          years to come. We actively update and maintain all of our projects.
          This not only ensures all of our hand work isn't for nothing, but it
          encourages writing maintainable code and minimizing technical debt. If
          you see a project here you would like to work on, you can!
        </p>
      </div>
      {/* <h1 style={{ paddingLeft: 15 }}>Spring '23</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ProjectButton
          url={
            "https://chabotspace.org/wp-content/uploads/2020/04/observatory-main.png"
          }
          title={"Chabot Science Center"}
          width={"80%"}
          path={"https://chabotspace.org/"}
          pathUrl={true}
          caption={"Build a mobile app to enrich the visitor experience."}
        ></ProjectButton>

        <ProjectButton
          url={
            "https://www.ruthbancroftgarden.org/wp/wp-content/uploads/main-banner-img.jpg"
          }
          title={"Ruth Bancroft Gardens"}
          width={"80%"}
          path={"https://www.ruthbancroftgarden.org/"}
          pathUrl={true}
          caption={"Build a mobile app to house an interactive garden tour."}
        ></ProjectButton>

        <ProjectButton
          url={
            "https://i.pinimg.com/originals/32/60/cd/3260cd08c8fc795c59af655e4dd26bf9.jpg"
          }
          title={"Punjabi Art Collective"}
          width={"80%"}
          path={"https://www.instagram.com/punjabiartcollective/"}
          pathUrl={true}
          caption={
            "Build a club website to host general information, a monthly newletter, and an online store."
          }
        ></ProjectButton>
      </div> */}

      <h1 style={{ paddingLeft: 15 }}>Fall '22</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ProjectButton
          url={
            "https://chabotspace.org/wp-content/uploads/2020/04/observatory-main.png"
          }
          title={"Chabot Science Center"}
          width={"80%"}
          path={"https://chabotspace.org/"}
          pathUrl={true}
          caption={"Build a mobile app to enrich the visitor experience."}
        ></ProjectButton>

        <ProjectButton
          url={
            "https://www.ruthbancroftgarden.org/wp/wp-content/uploads/main-banner-img.jpg"
          }
          title={"Ruth Bancroft Gardens"}
          width={"80%"}
          path={"https://www.ruthbancroftgarden.org/"}
          pathUrl={true}
          caption={"Build a mobile app to house an interactive garden tour."}
        ></ProjectButton>

        <ProjectButton
          url={
            "https://i.pinimg.com/originals/32/60/cd/3260cd08c8fc795c59af655e4dd26bf9.jpg"
          }
          title={"Punjabi Art Collective"}
          width={"80%"}
          path={"https://www.instagram.com/punjabiartcollective/"}
          pathUrl={true}
          caption={
            "Build a club website to host general information, a monthly newletter, and an online store."
          }
        ></ProjectButton>
      </div>
    </div>
  );
}
