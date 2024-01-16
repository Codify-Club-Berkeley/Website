type Quote = {
  text: string;
  author: string;
  avatar: string;
};

export const quotes: Quote[] = [
  {
    text: "I made lots of progress on our project and was very proud and surprised by our speed and productivity. Everyone was invested in the team, and we even organized club dinners after meetings. ",
    author: "Cameron Leung",
    avatar: require("../assets/Images/Headshots/Cameron Leung.jpg"),
  },
  {
    text: "Codify has taught me so much, not only about SWE, but also about organization and leadership. In a student organization, you can't incentivize people with money, so you have to learn how to create genuine buy in and support for your vision.",
    author: "Aidan Sunbury",
    avatar: require("../assets/Images/Headshots/Aidan Sunbury.png"),
  },
  {
    text: "I’ve gained so many valuable software engineering skills/experiences that are highly applicable to the industry since joining Codify! Codify members are always supportive and helpful.",
    author: "Cady He",
    avatar: require("../assets/Images/Headshots/Cady He.jpeg"),
  },
];
