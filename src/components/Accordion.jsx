import React from "react";
import Accordion from "react-bootstrap/Accordion";

function AccordionItem({ eventKey, header, body }) {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body>{body}</Accordion.Body>
    </Accordion.Item>
  );
}
function CustomAccordion({ items }) {
  return (
    <Accordion defaultActiveKey={["0"]} flush alwaysOpen>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          eventKey={index.toString()}
          header={item.header}
          body={item.body}
        />
      ))}
    </Accordion>
  );
}

export default CustomAccordion;
