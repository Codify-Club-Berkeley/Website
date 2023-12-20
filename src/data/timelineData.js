// If descriptions are just text with no links, simply leave it as a string. Otherwise use JSX.
// subHeadings are optional

export const timelineData = [
  // /* NEED TO UPDATE TIMELINE DATA
  {
    title: "Applications Open",
    description: (
      <span>
        Looking for passionate developers or UI/UX designers!
        <br></br>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfnDCGZPdlGBtKN2-5oAuNnzv57tU4093MrI_pCDpDoyxM5Qw/viewform"
          target="_blank"
          rel="noreferrer"
        >
          Application Form
        </a>
      </span>
    ),
    date: "1/9/24",
  },
  {
    title: "Tabling",
    description: "Come talk to us on the glade to learn more about Codify.",
    date: "1/16/24-1/23/24",
  },
  {
    title: "Infosession",
    description:
      "Learn about current projects, club culture, and mingle with current Codify members at our info session. An initial 45 minute presentation will be followed by a Q & A period and a mixer with members.",
    date: "1/18/24",
    subHeading: "Time: 8-10 PM, Location: TBD",
  },
  {
    title: "Game Night Social",
    description:
      "Come to our game night to meet current Codify members, play games, eat food, and have fun!",
    date: "1/25/24",
    subHeading: "Time: 7-9 PM, Location: TBD",
  },

  {
    title: "Final Application Deadline",
    description:
      "All applications are due by 11:59 PM. If you have any last minute difficulties submitting, please email us at codify.berkeley@gmail.com",
    date: "1/26/24",
  },
  {
    title: "Interviews",
    description:
      "After submitting an application, you may be invited to schedule an interview with us. More details will be released then. ",
    date: "1/28/23-1/29/24",
  },
  {
    title: "Application Decisions Released",
    description: "We will release decisions deliberation.",
    date: "2/1/24",
  },

  // {
  //   title: "Education Program Begins",
  //   description:
  //     "Our education program teaches the fundamentals of full stack web and mobile development. Completing the entire program with a high enough grade guarantees acceptance into Codify for the following semester.",
  //   date: "9/7/23",
  // },
  // {
  //   title: "Final Application Decisions Released",
  //   description:
  //     "Check your email to see if you've been accepted! Every semester we receive many more applications than we can accept, so if you are not accepted, we encourage you to apply again next semester.",
  //   date: "9/8/23",
  // },
  // */
];
