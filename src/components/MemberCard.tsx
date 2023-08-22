import React from "react";

export default function MemberCard({ imagePath, name, title }) {
  return (
    <div className="flex-col h-80 w-60 bg-codify-purple rounded-lg shadow-lg overflow-hidden m-3">
      <img className="h-60 w-full object-cover" src={imagePath} alt="alt" />

      <div className="ml-2">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
}
