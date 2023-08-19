// If descriptions are just text with no links, simply leave it as a string. Otherwise use JSX.
// subHeadings are optional

export const timelineData = [
  {
    title: "Applications Open",
    description: (
      <span>
        We are looking for students who want to apply their technical skills to
        solve real-world challenges for startups, whether as a developer or
        UI/UX designer. If you're new to coding, consider starting with our
        no-application education program, which provides a direct path into
        Codify.
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
    date: "8/23/23",
  },
  {
    title: "Tabling",
    description: "Come talk to us on the glade to learn more about Codify!",
    date: "8/23/23-9/1/23",
  },
  {
    title: "Info Session 1",
    description:
      "Learn about the application process, club culture, and more at our info sessions. An initial 45 minute presentation will be followed by a Q & A period and an informal meet and greet with members.",
    date: "8/29/23",
    subHeading: "Time: 8-9:30 PM, Location: Moffit 101",
  },
  {
    title: "Info Session 2",
    description:
      "Learn about the application process, club culture, and more at our info sessions. An initial 45 minute presentation will be followed by a Q & A period and an informal meet and greet with members.",
    date: "8/31/23",
    subHeading: "Time: 8-9:30 PM, Location: Social Sciences Building 60",
  },
  {
    title: "Interviews",
    description:
      "After submitting an application, you will be invited to interview with us. In your interview, you will present either your past work or a mini application project.",
    date: "8/25/23-9/7/23",
  },
  {
    title: "First Round of Application Decisions Released",
    description:
      "If we want you to join, we won't wait to tell you! We release decisions on a rolling basis after applicants have completed their interview.",
    date: "9/1/23",
  },
  {
    title: "Final Application Deadline",
    description:
      "All applications are due by 11:59 PM. If you have any last minute difficulties submitting, please email us at codify.berkeley@gmail.com",
    date: "9/5/23",
  },
  {
    title: "Education Program Begins",
    description:
      "Our education program teaches the fundamentals of full stack web and mobile development. Completing the entire program with a high enough grade guarantees acceptance into Codify for the following semester.",
    date: "9/6/23",
  },
  {
    title: "Final Application Decisions Released",
    description:
      "Check your email to see if you've been accepted! Every semester we receive many more applications than we can accept, so if you are not accepted, we encourage you to apply again next semester.",
    date: "9/8/23",
  },
];
