import React from "react";
import PageHeader from "../components/PageHeader";
import CustomAccordion from "../components/Accordion";
import TextBlock from "../components/TextBlock";
import { useMediaQuery } from "react-responsive";
import ContactForm from "../components/ContactForm";

export default function WorkWithUs() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Breakpoint
  });

  const accordionItems1 = [
    {
      header: "What can Codify bring you?",
      body: "We provide the technical and design support to bring your ideas to life.",
    },
    {
      header:
        "I'm not sure if my needs fit Codify's project model, but I am interested in a potential collaboration.  Who should I talk to? ",
      body: "Please contact us through email! We check our inbox frequently and can set up a brief meeting.",
    },
    {
      header: "How can I partner with Codify?",
      body: " Our collaborations are handled case-by-case, but generally consist of a few onboarding meetings to hammer out vision, specifications, and communication channels. ",
    },
    {
      header: "What does partnership look like?",
      body: "As a baseline, a Project Lead will meet with you on a regular basis to report on progress, as well as discuss roadblocks and requirements. Our teams of 4-6 developers will then work on a mutually-agreed-upon timeline to ensure efficiency and speed.",
    },
    {
      header: "What is Codify's standard working timeline for each project?",
      body: "Each team of developers operates on a 10-week schedule, for the duration of the Berkeley semester. We only start new projects at the beginning of each semester, but we are open to discussing new collaboration opportunities at any time. *Projects can roll over to span multiple semesters.  ",
    },
  ];

  const accordionItems2 = [
    {
      header: "What is your vision?",
      body: "We want to know what type of tool or application you want to build. Who do you want to serve? Why do you find this project exciting? What, in its finalized form, does your idea look like in your mind?",
    },
    {
      header: "Do you have an existing codebase?",
      body: "Do you already have a repository and a tech stack you would like to use? (It's completely fine if you don't!) ",
    },
    {
      header: "What does your ideal partnership look like with us?",
      body: "We would like to be 100% clear on what you hope to achieve, and create a realistic timeframe around our shared goals. ",
    },
  ];
  return (
    <div>
      <PageHeader
        title="Work with Us"
        body="If you have a project idea that you are interested in pursuing, 
        don't hesitate to contact us. We are always looking for partners! "
      />

      <br></br>

      <div
        className="p-3 m-8"
        style={{ backgroundColor: "#d9d9d9", textAlign: "center" }}
      >
        <h5>
          To inquire about working with Codify or joining Codify, please email
          us at{" "}
        </h5>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=codify.berkeley@gmail.com">
          <h4 // update hyperlink
          >
            codify.berkeley@gmail.com
          </h4>
        </a>
      </div>

      <TextBlock
        title="Questions for Us"
        text="Frequently asked questions about collaborating with Codify."
        isMobile={isMobileDevice}
        marginLeft={isMobileDevice ? "0px" : "100px"}
        marginRight={isMobileDevice ? "0px" : "100px"}
      />
      <div
        style={{
          marginLeft: isMobileDevice ? "20px" : "150px",
          marginRight: isMobileDevice ? "20px" : "150px",
        }}
      >
        <CustomAccordion items={accordionItems1} />
        {/* <ContactForm /> */}
      </div>

      <br></br>

      <hr className="border-b-2 border-purple-500" />

      <TextBlock
        title="Questions for You"
        text="If you are interested in partnering with Codify, these are some questions we might ask you at our first meeting."
        isMobile={isMobileDevice}
        marginLeft={isMobileDevice ? "0px" : "100px"}
        marginRight={isMobileDevice ? "0px" : "100px"}
      />
      <div
        style={{
          marginLeft: isMobileDevice ? "20px" : "150px",
          marginRight: isMobileDevice ? "20px" : "150px",
        }}
      >
        <CustomAccordion items={accordionItems2} />
      </div>

      <br></br>
    </div>
  );
}
