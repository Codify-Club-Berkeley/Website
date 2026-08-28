// If descriptions are just text with no links, simply leave it as a string. Otherwise use JSX.
// subHeadings and times are optional

import React from "react";
import {JSX} from "react";

export type TimelineEntry = {
    title: string;
    description: string | JSX.Element;
    date: string;
    time?: string;
    subHeading?: string;
}

export const timelineData: TimelineEntry[] = [
    {
        title: "Applications Open for Fall Semester",
        description: (
            <>
                <p>Join us for a fun semester, we'd love to have you apply!</p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScbQxEqWrhuq4GeVM0tcEfi8NbgOgfgui5TF4dNeEa2WxwsIQ/viewform"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-codify-purple font-semibold hover:underline">
                    Apply here!
                </a>
            </>
        ),
        date: "Fri, 8/28/26",
    },
    {
        title: "Club & Cookies",
        subHeading: "Dwinelle 155",
        description: "Come hear about Codify and other tech clubs on campus, cookies provided!",
        date: "Fri, 8/28/26",
        time: "8–10 PM",
    },
    {
        title: "Info Session 1",
        subHeading: "bNorth (MLK Basement) 82D",
        description: "Learn about Codify, how our project teams work, and how to apply.",
        date: "Wed, 9/2/26",
        time: "8–9 PM",
    },
    {
        title: "Info Session 2",
        subHeading: "bNorth (MLK Basement) 82D",
        description: "Same session as Wednesday, for anyone who couldn't make the first.",
        date: "Thurs, 9/3/26",
        time: "8–9 PM",
    },
    {
        title: "Game Night",
        subHeading: "bNorth (MLK Basement) 82D",
        description: "Play games with our members and get to know the club outside of a presentation.",
        date: "Fri, 9/4/26",
        time: "8–10 PM",
    },
    {
        title: "Applications Due",
        description: "Submit your written application before the deadline.",
        date: "Tues, 9/8/26",
        time: "11:59 PM",
    },
    {
        title: "Interviews",
        subHeading: "Virtual or In-person",
        description: "Sign up for a 45-minute solo interview to discuss your application and your goals for the semester.",
        date: "Sat, 9/12/26 & Sun, 9/13/26",
    },
    {
        title: "Applicant Social Mixer / A Week in Codify",
        subHeading: "Dwinelle 105",
        description: "Meet other applicants and current members.",
        date: "Mon, 9/14/26",
        time: "8–9 PM",
    },
    {
        title: "Decisions Released",
        description: "We will email every applicant with our decision.",
        date: "Wed, 9/16/26",
    },
    {
        title: "New Member Social",
        description: "Celebrate with the whole club!",
        date: "Sat, 9/19/26",
    },
];
