// If descriptions are just text with no links, simply leave it as a string. Otherwise use JSX.
// subHeadings are optional

import React from "react";
import {JSX} from "react";

export type TimelineEntry = {
    title: string;
    description: string | JSX.Element;
    date: string;
    subHeading?: string;
}

export const timelineData: TimelineEntry[] = [
	{
		title: "Applications Open",
		description: (
			<span>
				Looking for passionate developers!
				<br></br>
				<a
					href="https://forms.gle/kFhkQ14prjMyZkkL7"
					target="_blank"
					rel="noreferrer"
					>
					Application Form
				</a>
			</span>
		),
		date: "8/25/25",
	},
	{
		title: "Tabling",
		description: "Come talk to us on Upper Sproul to learn more about Codify.",
		date: "8/27/25-9/5/25",
		subHeading: "Time: 10AM - 2PM"
	},
	{
		title: "Infosession #1",
		description: "Learn about current projects, club culture, and mingle with current Codify members at our info session. An initial 30 minute presentation will be followed by a Q & A period and a mixer with members.",
		date: "Wednesday, 9/3/25",
		subHeading: "Time: 8 - 9PM, Location: Wheeler 126",
	},
	{
		title: "Infosession #2",
		description:
			"Learn about current projects, club culture, and mingle with current Codify members at our info session. An initial 30 minute presentation will be followed by a Q & A period and a mixer with members.",
		date: "Thursday, 9/4/25",
		subHeading: "Time: 8 - 9PM, Location: Wheeler 126",
	},
    {
        title: "Game Night",
        description: "Join us for game night where you'll get to meet and mix with existing club members and play exciting board games!",
        date: "Friday, 9/5/25",
        subHeading: "Time: 8 - 10PM, Location: Dwinelle 209",
    },
	{
		title: "Final Application Deadline",
		description:
			"All applications are due by 11:59PM. If you have any last minute difficulties submitting, please email us at codify.berkeley@gmail.com",
		date: "Tuesday, 9/9/25",
	},
	{
		title: "Interviews",
		description:
			"In the application, you will schedule one 30-minute technical/behavioral interview with us. Interview expectations can be found in the application. Please indicate whether you'd prefer an in-person or virtual interview inside your application.",
		date: "Weekend, 9/13/25-9/14/25",
		subHeading: "Time: 10AM - 3PM, Location: Haas School of Business or Virtual",
	},
	{
		title: "Decisions Released",
		description: "Check your email to see if you've been accepted!",
		date: "Wednesday, 9/17/25",
	},
    {
        title: "New Member Social!",
        description: "Congrats on being accepted into Codify! Come meet your fellow new members and get to know each other. Location and time will be a secret until then ;).",
        date: "Saturday, 9/20/25",
    },
];
