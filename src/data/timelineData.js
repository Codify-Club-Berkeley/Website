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
				{/* <a
          href="https://forms.gle/GJEixD4AFTwkWrbf6"
          target="_blank"
          rel="noreferrer"
        >
          Application Form
        </a> */}
			</span>
		),
		date: "8/30/24",
	},
	{
		title: "Tabling",
		description: "Come talk to us on the glade to learn more about Codify.",
		date: "8/29/24-9/3/24",
	},
	{
		title: "Infosession",
		description:
			"Learn about current projects, club culture, and mingle with current Codify members at our info session. An initial 30 minute presentation will be followed by a Q & A period and a mixer with members.",
		date: "9/3/24",
		subHeading: "Time: 8-9 PM, Location: TBA",
	},
	{
		title: "Interview Prep Workshop",
		description:
			"Come learn everything you need to know to succeed in the technical interview.",
		date: "9/5/24",
		subHeading: "Time: 8-9:30 PM, Location: TBA",
	},
	{
		title: "Game Night Social",
		description:
			"Come to our game night to meet current Codify members, play games, eat food, and have fun!",
		date: "9/6/24",
		subHeading: "Time: 8-10 PM, Location: TBA",
	},
	{
		title: "Final Application Deadline",
		description:
			"All applications are due by 11:59 PM. If you have any last minute difficulties submitting, please email us at codify.berkeley@gmail.com",
		date: "9/6/24",
	},
	{
		title: "Interviews",
		description:
			"After submitting an application, you may be invited to schedule an interview with us. More details will be released then. ",
		date: "Labor Day Weekend",
	},
	{
		title: "Decisions Released",
		description: "Check your email to see if you've been accepted!",
		date: "TBA",
	},
];
