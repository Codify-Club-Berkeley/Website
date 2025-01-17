// If descriptions are just text with no links, simply leave it as a string. Otherwise use JSX.
// subHeadings are optional

export const timelineData = [
	// /* NEED TO UPDATE TIMELINE DATA
	{
		title: "Applications Open",
		description: (
			<span>
				Looking for passionate developers!
				<br></br>
				<a
					href="https://forms.gle/QhsMhaG9fhweLGew5"
					target="_blank"
					rel="noreferrer"
					>
					Application Form
				</a>
			</span>
		),
		date: "1/17/25",
	},
	{
		title: "Tabling",
		description: "Come talk to us on the Glade to learn more about Codify.",
		date: "1/21/25-1/24/25",
		subHeading: "Time: 10 AM-3 PM"
	},
	{
		title: "Infosession #1",
		description:
			"Learn about current projects, club culture, and mingle with current Codify members at our info session. An initial 30 minute presentation will be followed by a Q & A period and a mixer with members.",
		date: "Tuesday, 1/28/25",
		subHeading: "Time: 9-10 PM, Location: bNorth 82D (Basement of MLK)",
	},
	{
		title: "Infosession #2",
		description:
			"Learn about current projects, club culture, and mingle with current Codify members at our info session. An initial 30 minute presentation will be followed by a Q & A period and a mixer with members.",
		date: "Friday, 1/31/25",
		subHeading: "Time: 9-10 PM, Location: bNorth 82D (Basement of MLK)",
	},
	{
		title: "Final Application Deadline",
		description:
			"All applications are due by 11:59 PM. If you have any last minute difficulties submitting, please email us at codify.berkeley@gmail.com",
		date: "Friday, 1/31/25",
	},
	{
		title: "Interviews",
		description:
			"In the application, you will schedule one 30-minute technical/behavioral interview with us. Interview expectations can be found in the application.",
		date: "Weekend, 2/1/25-2/2/25",
		subHeading: "Time: 10 AM-3 PM, Location: Haas Courtyard",
	},
	{
		title: "Decisions Released",
		description: "Check your email to see if you've been accepted!",
		date: "Tuesday, 2/4",
	},
];
