export type Project = {
  projectTitle: string;
  shortDescription: string;
  aboutClient: string;
  aboutProject: string;
  imgSource: string;
  technologies: string[];
  linkIcons: string[];
  linkDestinations: string[];
};

export const allProjectsData: Project[] = [
  {
    projectTitle: "Scribble AI",
    shortDescription:
      "Scribble AI is a mobile app that allows users to take a picture of a handwritten math problem and receive a step-by-step solution.",
    aboutClient:
      "About Scribble AI: Scribble AI is a startup that aims to make math education more accessible and engaging. They are currently working on a mobile app that allows users to take a picture of a handwritten math problem and receive a step-by-step solution.",
    aboutProject:
      "Our Project: We are working with Scribble AI to build out their mobile app. We are currently working on the frontend of the app, which is built in React Native. We are also working on the backend, which is built in Python using Flask.",
    imgSource:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/e5/11/99e5116c-acde-28ee-5b9b-0b70f3eab035/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
    technologies: ["React Native", "Flask", "Swift"],
    linkIcons: ["GitHub"],
    linkDestinations: ["https://www.scribbleai.net/"],
  },
  {
    projectTitle: "Chabot Space and Science Center",
    shortDescription: "Visitor Guide App to Provide an Enriched Experience",
    aboutClient:
      "The Chabot Space & Science Center is a non-profit museum that serves Oakland and the greater Bay Area as a place for STEM learning and engagement. They are the official visitors center for Nasa Ames and host the largest observatory complex free for public viewing in the Western United States.",
    aboutProject: "React Baby",
    imgSource:
      "https://chabotspace.org/wp-content/uploads/2018/07/imageslogos.png",
    technologies: ["React Native", "Firebase"],
    linkIcons: ["GitHub", "Website"],
    linkDestinations: [
      "https://github.com/Codify-Club-Berkeley/cssc-mobile-app",
      "https://chabotspace.org/",
    ],
  },
];

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
