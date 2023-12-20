import React from "react";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  return timelineData.map((item) => {
    return (
      <TimelineItem
        title={item.title}
        date={item.date}
        description={item.description}
        subHeading={item.subHeading}
      ></TimelineItem>
    );
  });
}

// All props are strings
function TimelineItem({ title, date, description, subHeading = "" }) {
  return (
    <div class="flex flex-row relative group">
      {/** Actual Timeline Bar On the Left */}
      <div class="flex flex-col pr-2">
        <div class="flex p-1 my-1 h-5 w-5 rounded-full border-4 border-codify-lavender group-hover:bg-codify-lavender transition duration-500"></div>
        <div class="flex-1 p-0.1 w-1 place-self-center bg-codify-lavender"></div>
      </div>

      {/** Timeline Item on the right */}
      <div>
        <span class="text-subheader-gray">{date}</span>
        <h3>{title}</h3>
        <span class="text-subheader-gray font-semibold">{subHeading}</span>
        {subHeading && <br></br>}
        {description}
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
