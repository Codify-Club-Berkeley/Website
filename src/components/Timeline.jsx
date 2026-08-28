import React from "react";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  return timelineData.map((item, index) => {
    return (
      <TimelineItem
        key={index}
        title={item.title}
        date={item.date}
        time={item.time}
        description={item.description}
        subHeading={item.subHeading}
        isLast={index === timelineData.length - 1}
      />
    );
  });
}

function FlagIcon() {
    return (
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 21V3" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 4h13l-3 4 3 4H5" fill="white" />
        </svg>
    );
}

// All props are strings
function TimelineItem({ title, date, time = "", description, subHeading = "", isLast = false }) {
    return (
        <div className="flex flex-row relative group">
            {/** Actual Timeline Bar On the Left */}
            <div className="flex flex-col pr-2">
                {isLast ? (
                    <div className="flex items-center justify-center my-0.5 h-6 w-6 rounded-full bg-codify-purple">
                        <FlagIcon />
                    </div>
                ) : (
                    <div className="flex p-1 my-1 h-5 w-5 rounded-full border-4 border-codify-lavender group-hover:bg-codify-lavender transition duration-500"></div>
                )}
                {!isLast && <div className="flex-1 p-0.1 w-1 place-self-center bg-codify-lavender"></div>}
            </div>

            {/** Timeline Item on the right */}
            <div>
                <span className="text-subheader-gray">{date}</span>
                {time && <span className="text-subheader-gray ml-3">{time}</span>}
                <h3>{title}</h3>
                <span className="text-subheader-gray font-semibold">{subHeading}</span>
                {subHeading && <br></br>}
                {description}
                <br></br>
                <br></br>
            </div>
        </div>
    );
}

