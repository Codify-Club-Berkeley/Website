import React from "react";
import PageHeader from "../components/PageHeader";
import CustomAccordion from "../components/Accordion";
import TextBlock from "../components/TextBlock";
import { useMediaQuery } from "react-responsive";

export default function WorkWithUs() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 768px)", // Breakpoint
  });

  const accordionItems = [
    {
      header: "What is the process for working with Codify?",
      body: "Each team of 4-6 developers operate on a 10-week schedule, spanning the duration of the Berkeley semester.",
    },
    {
      header: "What is Codify's standard working timeline for each project?",
      body: "Each team operates on a 10-week schedule, spanning the duration of the Berkeley semester. ",
    },
    {
      header: "Who will I be in communication with to discuss project details?",
      body: "Each team of 4-6 developers operate on a 10-week schedule, spanning the duration of the Berkeley semester.",
    },
    {
      header: "Who will I be in communication with to discuss project details?",
      body: "Each team of 4-6 developers operate on a 10-week schedule, spanning the duration of the Berkeley semester.",
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
      <TextBlock
        title="Questions for Us"
        text="Frequently asked questions about Codify."
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
        <CustomAccordion items={accordionItems} />
      </div>

      {/* <div style={{ textAlign: "center" }}>
        <p>
          To inquire about working with Codify or joining Codify, please email
          us at{" "}
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=codify.berkeley@gmail.com">
          <p // update hyperlink
          >
            codify.berkeley@gmail.com
          </p>
        </a>
      </div> */}
      <div style={{ paddingTop: "250px" }}></div>
      {/* <div className="body">
        <h1>Non Profits</h1>
        <p> </p>
        <h1>Companies</h1>
        <p>Developers are expensive. </p>
        <h1>Students</h1>
        <p>hi</p>
      </div> */}
    </div>
  );
}
