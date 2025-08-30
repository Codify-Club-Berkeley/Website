import React from "react";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import './MemberCard.css'; // Import the regular CSS file

interface MemberCardProps {
  imagePath: string;
  name: string;
  title: string;
  url?: string;
  backContent?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ imagePath, name, title, url, backContent }) => {
  return (
    <div className="flex-col h-90 w-60 shadow-lg overflow-hidden m-3">
      <div className="flipCard">
        <div className="flipCardInner">
          <div className="flipCardFront">
            <img className="image h-60 w-full object-cover p-3" src={imagePath} alt={name} />
            <div className="ml-2 flex-row">
              <h3 className="text-left text-xl font-semibold mb-2">{name}</h3>
              <div className="flex flex-row">
                <p className="text-gray-600">{title}</p>
                {url && (
                  <a href={url} className="text-purple-500 hover:underline">
                    <LocalCafeIcon className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="flipCardBack">
            <p>{backContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
