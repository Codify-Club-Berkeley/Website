export type Project = {
  projectTitle: string;
  shortDescription: string;
  aboutClient: string;
  aboutProject: string;
  imgSource: string;
  technologies: string[];
  linkIcons: string[];
  linkDestinations: string[];
  currentProject?: boolean;
};

export const allProjectsData: Project[] = [
  {
    projectTitle: "Scribble AI",
    shortDescription: "Build a keyboard that allows you to use AI anywhere",
    aboutClient:
      "Scribble AI wants to make the latest AI technology accessible to everyone. They are currently working on a mobile app with built in prompts that allow for optimal use of AI, and has features that allows you to easily export and use AI generated content.",
    aboutProject:
      "In addition to contributing to the overall usability and design of the app, Codify worked on implementing a custom iOS keyboard that allows users to use Scribble AI functionality anywhere on their phone. ",
    imgSource:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/99/e5/11/99e5116c-acde-28ee-5b9b-0b70f3eab035/AppIcon-1x_U007emarketing-0-7-0-85-220.png/460x0w.webp",
    technologies: ["React Native", "Flask", "Swift"],
    linkIcons: ["GitHub", "Website", "App Store", "Play Store"],
    linkDestinations: [
      "https://github.com/Codify-Club-Berkeley/weave",
      "https://www.scribbleai.net/",
      "https://apps.apple.com/us/app/scribble-ai/id1662081018",
      "https://play.google.com/store/apps/details?id=com.sahilmehta.snack945e87d198e54f7c83221d2d6dcdd91f&hl=en_US&gl=US",
    ],
    currentProject: false,
  },
  {
    projectTitle: "Chabot Space and Science Center",
    shortDescription: "Visitor Guide App to Provide an Enriched Experience",
    aboutClient:
      "The Chabot Space & Science Center is a non-profit museum that serves Oakland and the greater Bay Area as a place for STEM learning and engagement. They are the official visitors center for Nasa Ames and host the largest observatory complex free for public viewing in the Western United States.",
    aboutProject:
      "We are building the Chabot Visitor Guide App from scratch to make the content of the museum more accessible. Key features include an interactive museum map, additional exhibit information accessible in multiple languages, and live updates about events within the center.",
    imgSource:
      "https://chabotspace.org/wp-content/uploads/2018/07/imageslogos.png",
    technologies: ["React Native", "Firebase"],
    linkIcons: ["GitHub", "Website"],
    linkDestinations: [
      "https://github.com/Codify-Club-Berkeley/cssc-mobile-app",
      "https://chabotspace.org/",
    ],
    currentProject: true,
  },
  {
    projectTitle: "Posto Social",
    shortDescription: "Social Media Platform for Authenticity",
    aboutClient:
      "Posto Social is looking to build a social media platform with authenticity at its core. With an innovative approach and unique features, Posto is creating social media for people who love real life.",
    aboutProject:
      "We built the entire Posto Social app from scratch using Flutter on the frontend, NodeJS on the backend, and Firebase for the database.",
    imgSource:
      "https://uploads-ssl.webflow.com/6336a6e39a019c76640a4d88/64186876d8dd5be913cd377d_Logo%20Posto%20black%20(word)-p-500.png",
    technologies: ["Flutter", "Firebase", "Express", "NodeJS"],
    linkIcons: ["Website"],
    linkDestinations: ["https://www.postosocial.com/"],
    currentProject: true,
  },
  {
    projectTitle: "SWiiFT",
    shortDescription: "Cross Platform Frontend Mobile Development",
    aboutClient:
      "SWiiFT is a Berkeley Skydeck backed startup looking to change the way we travel. SWiiFT connects travelers with locals to help foster global connections and long lasting friendships.",
    aboutProject:
      "We worked to build the entire frontend of the SWiiFT app from scratch. We implemented a login flow, profiles, chat functionality, and more.",
    imgSource:
      "https://static.wixstatic.com/media/75207e_e6eab4112a4d4ef292e2297ce99a72bb~mv2.png/v1/fill/w_536,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SWiiFT_full_logo_oulined_zig_zag_black.png",
    technologies: ["React Native", "TypeScript"],
    linkIcons: ["GitHub", "Website"],
    linkDestinations: [
      "https://github.com/Codify-Club-Berkeley/SWiiFT-frontend",
      "https://www.swiiftapp.com/",
    ],
    currentProject: false,
  },
  {
    projectTitle: "Ruth Bancroft Garden",
    shortDescription: "Plant Directory and Digital Catalog",
    aboutClient:
      "The Ruth Bancroft Garden, located in Walnut Creek, is a renowned 2.5-acre horticultural masterpiece that showcases an exquisite collection of drought-tolerant plants from around the world. Founded by Ruth Bancroft in the 1970s, the garden is celebrated for its stunning succulents and showcases the beauty and adaptability of arid-climate flora.",
    aboutProject:
      "We built the entire frontend of the Ruth Bancroft Garden app from scratch. We implemented a plant directory, a virtual tour, and more.",
    imgSource:
      "https://www.ruthbancroftgarden.org/wp/wp-content/themes/ruthbancroft/images/ruthbancroftgarden_logo_header.png",
    technologies: ["React Native", "JavaScript"],
    linkIcons: ["GitHub", "Website"],
    linkDestinations: [
      "https://github.com/Codify-Club-Berkeley/garden-app",
      "https://www.ruthbancroftgarden.org/",
    ],
    currentProject: true,
  },
  {
    projectTitle: "UCSF",
    shortDescription: "Plant Directory and Digital Catalog",
    aboutClient:
      "We worked with Dr. Ruchika Bajaj on a research team to analyzing treatments for Cystic Fibrosis.",
    aboutProject:
      "We built a clustering algorithm to analyze h-bonds, contacts, and clashes to identify mutations in proteins using UCSF's open source ChimeraX software. ",
    imgSource: "https://www.ucsf.edu/themes/custom/ucsf/logo.svg",
    technologies: ["Python"],
    linkIcons: [],
    linkDestinations: [],
    currentProject: true,
  },
];
