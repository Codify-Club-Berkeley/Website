import React from "react";

const PageHeader = ({ title, body }) => {
  return (
    <div
      className="bg-navbar-purple text-white p-16  sticky top-0 lg-shadow"
      style={{
        marginTop: "-120px",
        height: "20rem",
      }}
    >
      <h1 className="text-6xl font-bold mb-4">{title}</h1>
      <p className="text-lg font-medium mb-6 lg:mr-80 md:mr-2">{body}</p>
    </div>
  );
};

export default PageHeader;
