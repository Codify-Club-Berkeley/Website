import React from "react";
import { technologyLogos } from "../data/technologyLogos";

// If a link is provided, the badge will be clickable and will redirect to the link
export default function TechnologyBadge(badgeName, badgeText, link) {
  // Return the content wrapped in a link if a link is provided
  if (link) {
    return (
      <a
        className="text-decoration-none"
        href="https://apps.apple.com/us/app/scribble-ai/id1662081018?ref=producthunt"
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

const InnerContent = ({ badgeName, badgeText }) => {
  const imageSource = technologyLogos[badgeName];
  return (
    <div className="card-actions">
      <div className="flex-row badge badge-outline border-black h-8">
        <div className="flex items-center justify-center">
          <img className="h-5 w-1/3" src={imageSource} alt={badgeName} />
          <span className="flex-2 text-black text-center text-decoration-none">
            {badgeText}
          </span>
        </div>
      </div>
    </div>
  );
};
