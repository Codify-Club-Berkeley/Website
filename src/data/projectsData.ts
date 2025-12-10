import type { technologyLogos } from "./technologyLogos";

export type Project = {
	projectTitle: string;
	shortDescription: string;
	aboutClient: string;
	aboutProject: string;
	imgSource: string;
	technologies: (keyof typeof technologyLogos)[];
	linkIcons: string[];
	linkDestinations: string[];
	currentProject?: boolean;
};

export const allProjectsData: Project[] = [
	{
		projectTitle: "MyShake",
		shortDescription:
			"Mobile Earthquake Reporting Application",
		aboutClient:
			"MyShake is an Earthquake reporting maintained by the Berkeley Seismology lab",
		aboutProject:
			"Using Swift to focus on user sharing and reporting of seismic events along with immediate earthquake notifications and map views of seismic events.",
		imgSource: "https://myshake.berkeley.edu/img/Logo2022.png",
		technologies: ["Swift"],
		linkIcons: ["Website"],
		linkDestinations: ["https://myshake.berkeley.edu/"],
		currentProject: true,
	},
	{
		projectTitle: "Codify Education",
        shortDescription: "An introductory program where new members learn full-stack engineering fundamentals.",
        aboutClient: "Codify Education Programs — the entry point for new Codify members.",
        aboutProject: "The Codify Education Programs serves as an entry to Codify where students learn full stack engineering, including how to build a website. This program is designed to prepare new members for their transition from beginners to contributors on Codify client projects, where they will apply the skills they’ve learned to help write and merge code.",
		imgSource:
			"https://codify-berkeley-education.github.io/img/brackets.svg",
		technologies: ["React", "JavaScript", "TypeScript", "TailwindCSS"],
		linkIcons: ["Website"],
		linkDestinations: ["https://codify-berkeley-education.github.io/"],
		currentProject: true,
	},
    {
        projectTitle: "Coni",
        shortDescription: "A social platform connecting creators with brands through sponsored posts.",
        aboutClient: "A creator-brand collaboration platform.",
        aboutProject: "Coni is a social platform that connects creators with brands through sponsored posts. Users can share content, grow their audience, and get matched with sponsors that fit their level of reach — from small creators to rising influencers. With features like following, messaging, and a familiar feed, Coni works much like a creator-focused Instagram, making it easy for brands and users to collaborate as creators grow.",
        imgSource: require("../assets/Images/General/Coni.jpg"),
        technologies: ["React Native", "TypeScript", "Firebase"],
        linkIcons: [],
        linkDestinations: [],
        currentProject: true,
    },
	{
		projectTitle: "FlexDay",
		shortDescription: "AI tooling for document processing",
		aboutClient: "FlexDay is an AI and data science consulting company",
		aboutProject: "Building an internal tool to automate document processing",
		imgSource:
			"https://flexday.ai/wp-content/uploads/2024/12/LOGO.svg",
		technologies: ["Python", "Pytorch"],
		linkIcons: ["Website"],
		linkDestinations: ["https://flexday.ai/"],
		currentProject: false,
	},
	{
		projectTitle: "berkeleyclubs.com",
		shortDescription: "Club Directory for UC Berkeley Students",
		aboutClient:
			"berkeleyclubs.com is a project started and maintained by Berkeley students, some of whom are current Codify Members",
		aboutProject:
			"berkeleyclubs.com provides a platform for making exploring and engaging with clubs at UC Berkeley easier.",
		imgSource:
			"https://media.licdn.com/dms/image/v2/D560BAQFasU7n5AHOdw/company-logo_200_200/company-logo_200_200/0/1707161474242/berkeleyclubs_logo?e=2147483647&v=beta&t=oLjeTItgHj5BC6sGm1GLHtE9FQc0s0-fEiJ63E2oFPc",
		technologies: ["NextJS", "tRPC", "PostgreSQL"],
		linkIcons: ["Website"],
		linkDestinations: ["https://berkeleyclubs.com/"],
		currentProject: false,
	},
	{
		projectTitle: "Homies",
		shortDescription:
			"California's life-sharing program for people with disabilities",
		aboutClient:
			"Homies is an organization dedicated to bringing choice and power to the disability industry. They offer a wide range of housing options and supportive roommates for adults with disabilities.",
		aboutProject:
			"The app will provide a platform for individuals with autism and their parents/guardians to find and connect with potential caregiver roommates, and to share information about their needs and preferences in one place.",
		imgSource: "https://www.meethomies.com/wp-content/uploads/2023/07/logo.png",
		technologies: ["NextJS", "PostgreSQL", "DigitalOcean"],
		linkIcons: ["Website"],
		linkDestinations: ["https://www.meethomies.com/"],
		currentProject: false,
	},
	{
		projectTitle: "DayToDay",
		shortDescription:
			"The social location sharing app for your day-to-day life.",
		aboutClient:
			"DayToDay is an app that shares your location with your friends for the past 24 hours as a trail on the map. You can post stories, which are shown on the map and on a feed, and you can DM your friends - something to be used day-to-day. ",
		aboutProject:
			"Our project will help DayToday construct a universal search engine to search within your circles,for  places, and for nearby events.",
		imgSource:
			"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c7/74/30/c77430f2-1651-1464-c436-48347180ca0c/AppIcon-0-0-1x_U007ephone-0-85-220.png/230x0w.webp",
		technologies: [
			"Python",
			"DigitalOcean",
			"ElasticSearch",
			"Logstash",
			"Kibana",
		],
		linkIcons: ["App Store"],
		linkDestinations: [
			"https://apps.apple.com/us/app/daytoday-your-social-map/id6449508417",
		],
		currentProject: false,
	},
	{
		projectTitle: "SkyPortal",
		shortDescription: "Scientific tool for astronomical data analysis",
		aboutClient:
			"SkyPortal is a web application that interactively displays astronomical datasets for annotation, analysis, and discovery. It is designed to be modular and extensible, so it can be customized for various scientific use-cases.",
		aboutProject:
			"We are working on a frontend redesign of the SkyPortal web application, as well as making larger structural changes to the application.",
		imgSource: "https://skyportal.io/static/skyportal_logo.png",
		technologies: ["React"],
		linkIcons: ["GitHub", "Website"],
		linkDestinations: [
			"https://github.com/skyportal/skyportal",
			"https://skyportal.io/",
		],
		currentProject: false,
	},
	{
		projectTitle: "Kopernicus AI",
		shortDescription: "Market analysis using AI tools for enterprises",
		aboutClient:
			"Kopernicus is an AI powered data analytics and business intelligence platform that empowers businesses to understand threats, seize opportunities, and formulate strategies with unmatched precision. ",
		aboutProject:
			"We are building a data connector that allows companies to seamlessly import their accounting data from Quickbooks into the Kopernicus platform to power even more accurate and actionable insights",
		imgSource:
			"https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/cg4pfmt3up843ubu2h5s",
		technologies: ["React", "JavaScript", "Express", "NodeJS"],
		linkIcons: ["Website"],
		linkDestinations: ["https://www.kopernicus.com/"],
		currentProject: false,
	},
    /*
	{
		projectTitle: "TrailMarker",
		shortDescription:
			"Mobile app to connect you to nearby events and activities ",
		aboutClient:
			"Trailmarker is a platform that allows people find fun activities in the area and also earn prizes for attending events. ",
		aboutProject:
			"We are building a platform which displays to users nearby destinations and events that are going on, implementing a login portal, an interactive map, and more.",
		imgSource:
			"https://media.licdn.com/dms/image/v2/D560BAQFeh18S8PhFKg/company-logo_200_200/company-logo_200_200/0/1725314881403/thetrailmarker_logo?e=1745452800&v=beta&t=BaRWf2FMC4m90to7j97bFo2Ty7sxk_Nt7Z9N2omppLU",
		technologies: ["Flutter", "Firebase"],
		linkIcons: ["Website"],
		linkDestinations: ["https://thetrailmarker.com/"],
		currentProject: false,
	},
	*/
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
		linkIcons: ["Website", "App Store", "Play Store"],
		linkDestinations: [
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
		currentProject: false,
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
		currentProject: false,
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
	// {
	// 	projectTitle: "Ruth Bancroft Garden",
	// 	shortDescription: "Plant Directory and Digital Catalog",
	// 	aboutClient:
	// 		"The Ruth Bancroft Garden, located in Walnut Creek, is a renowned 2.5-acre horticultural masterpiece that showcases an exquisite collection of drought-tolerant plants from around the world. Founded by Ruth Bancroft in the 1970s, the garden is celebrated for its stunning succulents and showcases the beauty and adaptability of arid-climate flora.",
	// 	aboutProject:
	// 		"We built the entire frontend of the Ruth Bancroft Garden app from scratch. We implemented a plant directory, a virtual tour, and more.",
	// 	imgSource:
	// 		"https://www.ruthbancroftgarden.org/wp/wp-content/themes/ruthbancroft/images/ruthbancroftgarden_logo_header.png",
	// 	technologies: ["React Native", "JavaScript"],
	// 	linkIcons: ["GitHub", "Website"],
	// 	linkDestinations: [
	// 		"https://github.com/Codify-Club-Berkeley/garden-app",
	// 		"https://www.ruthbancroftgarden.org/",
	// 	],
	// 	currentProject: false,
	// },
	// {
	// 	projectTitle: "UCSF",
	// 	shortDescription:
	// 		"Protein Clustering algorithm for Cystic Fibrosis Research ",
	// 	aboutClient:
	// 		"We worked with Dr. Ruchika Bajaj on a research team that is analyzing treatments for Cystic Fibrosis.",
	// 	aboutProject:
	// 		"We built a clustering algorithm to analyze h-bonds, contacts, and clashes to identify mutations in proteins using UCSF's open source ChimeraX software. ",
	// 	imgSource: "https://www.ucsf.edu/themes/custom/ucsf/logo.svg",
	// 	technologies: ["Python"],
	// 	linkIcons: [],
	// 	linkDestinations: [],
	// 	currentProject: false,
	// },
];
