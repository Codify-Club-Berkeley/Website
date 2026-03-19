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
        title: "Applications Open for Fall Semester",
        description: "In the meantime follow our instagram “@codifyberkeley” and feel free to reach out to codifyberkeley@gmail.com for any questions",
        date: "8/19/26",
    },
];
