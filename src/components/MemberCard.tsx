import React from "react";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

export default function MemberCard({ imagePath, name, title, url }) {
  return (
    <div className="flex-col h-90 w-60 shadow-lg overflow-hidden m-3">
      <img className="h-60 w-full object-cover p-3" src={imagePath} alt="alt" />

      <div className="ml-2  flex-row">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>

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
  );
}
