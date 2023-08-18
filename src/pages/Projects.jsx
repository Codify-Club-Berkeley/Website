import * as React from "react";
import Box from "@mui/material/Box";
import ProjectButton from "../components/ProjectButton";
import { useState } from "react";
import { ProjectModal } from "../components/ProjectModal";
import "./Projects.css";
import ProjectView from "../components/ProjectView";

const active_projects = [
  {
    index: 1,
    backgroundImageUrl:
      "https://chabotspace.org/wp-content/uploads/2020/04/observatory-main.png",
    client: "Chabot Space and Science Center",
    clientWebsiteUrl: "https://chabotspace.org/",
    caption: "Full Stack Mobile Development to Enrich the Visitor Experience.",
    projectDescription:
      "Our Project: We will continue our work from last semester building out a React Native mobile app to make the content of the museum more accessible. This semester, we are also looking to start implementing some backend functionality with AWS amplify in order to allow Chabot to use the app as a marketing tool.",
    projectTitle: "Chabot Visitor Guide App",
    clientDescription:
      "About Chabot: The Chabot Space & Science Center is a non-profit museum that serves Oakland and the greater Bay Area as a place for STEM learning and engagement. They are the official visitors center for Nasa Ames and host the largest observatory complex free for public viewing in the Western United States.",
    technologiesUsed:
      "Technologies Used: React Native with Redux frontend, AWS amplify backend",
    projectImageUrl:
      "https://chabotspace.org/wp-content/uploads/2018/07/imageslogos.png",
  },
  {
    index: 2,
    backgroundImageUrl:
      "https://static.wixstatic.com/media/003cad_d7b121661bbb477da3e74a411c014b6e~mv2.png/v1/crop/x_1560,y_420,w_2840,h_3780/fill/w_1044,h_1390,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/6044020.png",
    client: "SWiiFT",
    clientWebsiteUrl: "https://www.swiiftapp.com/",
    caption: "Cross Platform Frontend Mobile Development for SWiiFT",
    projectDescription:
      "Our Project: Build a complete React Native frontend from scratch to integrate with SWiiFT's Google Firebase backend.",
    projectTitle: "Frontend Development of the SWiiFT App",
    clientDescription:
      "About SWiiFT: SWiiFT is a Berkeley Skydeck backed startup looking to change the way we travel. SWiiFT connects travelers with locals to help foster global connections and long lasting friendships.",
    technologiesUsed: "Technologies Used: React Native",
    projectImageUrl:
      "https://media.licdn.com/dms/image/D5612AQE9JwV5JJ36tA/article-inline_image-shrink_1500_2232/0/1672431950560?e=1679529600&v=beta&t=86d_b5UpYR3Prtn-FS_6tcSIsy-QqZcnwmwZiJhfAmk",
  },
  {
    index: 3,
    backgroundImageUrl:
      "https://www.ruthbancroftgarden.org/wp/wp-content/uploads/spring-scaled-e1649285710884.jpg",
    client: "The Ruth Bancroft Garden",
    clientWebsiteUrl: "https://www.ruthbancroftgarden.org/",
    caption: "Virtual Tour and Plant Directory App",
    projectDescription:
      "Our Project: Build a React Native mobile app to host The Ruth Bancroft Garden's guided tour and provide an interface for visitors to access The Ruth Bancroft Garden's database of plant information.",
    projectTitle: "Ruth Bancroft Garden Visitor Tour",
    clientDescription:
      "About The Ruth Bancroft Garden: The Ruth Bancroft Garden is a world-renowned 3.5 acre botanical garden and retail nursery housing a collection of climate-appropriate plants from around the world. Based in Walnut Creek, it has worked to educate and inspire gardeners for over fifty years.",
    technologiesUsed: "Technologies Used: React Native",
    projectImageUrl:
      "https://media.licdn.com/dms/image/D5612AQFwMcrLMouoAw/article-inline_image-shrink_1500_2232/0/1672432398217?e=1679529600&v=beta&t=Qggip2DPDB_IwKAL-3Dh6fOrjmszzGaJj9qNgSZaeMA",
  },
  {
    index: 4,
    backgroundImageUrl:
      "https://uploads-ssl.webflow.com/6336a6e39a019c76640a4d88/635112967f7629fdb80398c2_buttare%20342-p-1600.jpg",
    client: "Posto Social",
    clientWebsiteUrl: "https://www.postosocial.com/posto-home",
    caption: "Full Stack Development of Posto Social",
    projectDescription:
      "Our Project: Work with the Posto technical team to build out a core minimum viable product. Create a React Native mobile frontend and a Google Firebase backend capable of scaling to a large user base.",
    projectTitle: "Posto Social App",
    clientDescription:
      "About Posto: Posto Social is looking to build a social media platform with authenticity at its core. With an innovative approach and unique features, Posto is creating social media for people who love real life.",
    technologiesUsed:
      "Technologies Used: React Native, Google Firebase, and Google Firestore",
    projectImageUrl:
      "https://media.licdn.com/dms/image/D5612AQFDFESIpqyDLA/article-inline_image-shrink_1500_2232/0/1672432486481?e=1679529600&v=beta&t=HyURv6UFBvseTKzsyHXWX9slf6XffgCb4VKV1y6OvCM",
  },
  {
    index: 5,
    backgroundImageUrl:
      "https://i1.wp.com/www.leapmdusd.org/wp-content/uploads/2021/03/Pexles-Tutoring.jpeg?fit=2250%2C1500&ssl=1",
    client: "LEAP MDUSD",
    clientWebsiteUrl: "https://www.leapmdusd.org/",
    caption: "Tutor Matching Algorithm for LEAP MDUSD",
    projectDescription:
      "Our Project: Build a centralized website for students, tutors, and administrators to streamline the logistics of LEAP. We will create a fully functional personnel management and application administration platform. Additionally, we will create an algorithm to match students and tutors, a job which was previously completed manually.",
    projectTitle: "Digital Infrastructure for LEAP MDUSD",
    clientDescription:
      "About LEAP: Leap is a program that helps struggling MDUSD homeless and foster youth connect with high school student tutors to help them succeed in school. They also have several other programs to help homeless youth.",
    technologiesUsed: "Technologies Used: ReactJs and Google Firebase",
    projectImageUrl:
      "https://media.licdn.com/dms/image/D5612AQH6iXF061IHVQ/article-inline_image-shrink_1500_2232/0/1672432321280?e=1679529600&v=beta&t=k6ue_QD7UlJxHsW_SdPb4oZrOmq77cRfYE9BMwz27YE",
  },
  //maintained projects
  {
    index: 6,
    backgroundImageUrl:
      "https://pbs.twimg.com/media/Ewss5aYVEAE_BC6?format=jpg&name=large",
    client: "Punjabi Art Collective",
    clientWebsiteUrl: "https://www.instagram.com/punjabiartcollective/",
    caption: "Building a Website, Digital Magazine, and Online Store",
    projectDescription:
      "Our Project: Build a website for the PAC that matches their design asthenic and help them promote events, recruit members, and showcase their work. Additionally, we worked to build a digital storefront enabling PAC to sell merchandise. Most importantly, the website serves as a way for the PAC to digitally distribute their art magazine.",
    projectTitle: "PAC Website",
    clientDescription:
      "About the PAC: The Punjabi Art Collective is a UC Berkeley Student organization with a goal of promoting of Punjabi art and cultivating of the Punjabi community on campus.",
    technologiesUsed: "Technologies Used: ReactJs",
    projectImageUrl:
      "https://pbs.twimg.com/profile_images/1367335966386450442/u-8ipuoE_400x400.jpg",
  },
];

export default function ButtonBases() {
  //setting showModal to zero will not show any modal, setting it to a number
  //larger than zero will show that particular modal

  const [showModal, setShowModal] = useState(0);

  return (
    <div>
      <div className="header">
        <h1>
          <span style={{ color: "#9641FD" }}>Codify's</span> Work
        </h1>
      </div>
      {/* <div className="header">
        <a
          href="https://www.linkedin.com/pulse/codify-spring-2023-projects-preview-codify-berkeley/"
          target="_blank"
        >
          Spring 2023 Project Breakdown
        </a>
      </div> */}
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

      {/**Pass setShowModal so that the modal can close itself */}
      {showModal ? (
        <ProjectModal
          setShowModal={setShowModal}
          projectData={active_projects[showModal - 1]}
        />
      ) : null}
      <div className="body">
        <h2>Current Projects</h2>
      </div>
      <div className="grid">
        {active_projects
          .slice(0, 5)
          .map(({ backgroundImageUrl, client, caption, index }) => (
            <ProjectButton
              backgroundImageUrl={backgroundImageUrl}
              title={client}
              action={setShowModal}
              caption={caption}
              index={index}
            ></ProjectButton>
          ))}
      </div>
      <div className="body">
        <h2>Maintained Projects</h2>
      </div>
      {active_projects
        .slice(5, 6)
        .map(({ backgroundImageUrl, client, caption, index }) => (
          <ProjectButton
            backgroundImageUrl={backgroundImageUrl}
            title={client}
            action={setShowModal}
            caption={caption}
            index={index}
          ></ProjectButton>
        ))}
      {/* Project buttons to be uncommented */}

      {/* 
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
            "Build a club website to host general information, a monthly newsletter, and an online store."
          }
        ></ProjectButton>
      </div> */}

      {/* Todo uncomment me and replace all the old project displays with these */}
      {/* <ProjectView></ProjectView> */}
    </div>
  );
}
