import React from "react";
import { technologyLogos } from "../data/technologyLogos";

// If a link is provided, the badge will be clickable and will redirect to the link
export default function TechnologyBadge({ badgeName, badgeText, link }) {
  // Return the content wrapped in a link if a link is provided
  if (link) {
    return (
      <a
        className="text-decoration-none"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InnerContent badgeName={badgeName} badgeText={badgeText} />
      </a>
    );
  }
  // Otherwise, just return the content
  else {
    return <InnerContent badgeName={badgeName} badgeText={badgeText} />;
  }
}

function InnerContent({ badgeName, badgeText }) {
  const imageSource = technologyLogos[badgeName];
  return (
    <div className="rounded-md border border-black p-1 m-1">
      <div className="flex items-center">
        <img className="h-5 w-1/3" src={imageSource} alt={badgeName} />
        <span className="ml-2 text-black text-center text-xs whitespace-nowrap">
          {badgeText}
        </span>
      </div>
    </div>
  );
}
