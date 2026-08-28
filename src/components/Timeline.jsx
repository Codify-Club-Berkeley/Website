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
        isPast={hasEventPassed(item.date)}
      />
    );
  });
}

// Events only carry M/D/YY dates 
// counts as passed only once the last date in it has passed
function hasEventPassed(dateStr) {
    const matches = dateStr.match(/\d{1,2}\/\d{1,2}\/\d{2,4}/g);
    if (!matches) return false;

    const [month, day, year] = matches[matches.length - 1].split("/").map(Number);
    const eventDate = new Date(year < 100 ? 2000 + year : year, month - 1, day);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return today > eventDate;
}

function FlagIcon() {
    return (
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 21V3" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 4h13l-3 4 3 4H5" fill="white" />
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12l5 5L20 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// All props are strings
function TimelineItem({ title, date, time = "", description, subHeading = "", isLast = false, isPast = false }) {
    return (
        <div className="flex flex-row relative group">
            {/** Actual Timeline Bar On the Left */}
            <div className="flex flex-col items-center w-6 flex-shrink-0 mr-2">
                {isLast ? (
                    <div className="flex items-center justify-center my-0.5 h-6 w-6 rounded-full bg-codify-purple">
                        <FlagIcon />
                    </div>
                ) : isPast ? (
                    <div className="flex items-center justify-center my-0.5 h-6 w-6 rounded-full bg-codify-lavender">
                        <CheckIcon />
                    </div>
                ) : (
                    <div className="flex p-1 my-1 h-5 w-5 rounded-full border-4 border-codify-lavender group-hover:bg-codify-lavender transition duration-500"></div>
                )}
                {!isLast && <div className="flex-1 p-0.1 w-1 bg-codify-lavender"></div>}
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

