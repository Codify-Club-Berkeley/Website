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
        title: "Recruitment for Spring '26 begins",
        description: "Make sure to follow our instagram @codifyberkeley",
        date: "1/20/26",
    },
];
