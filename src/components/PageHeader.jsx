import React from "react";

const PageHeader = ({ title, body }) => {
  return (
    <div
      className="bg-navbar-purple text-white p-8 md:p-16 sticky top-0 lg-shadow"
      style={{
        marginTop: "-120px",
        minHeight: "20rem",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <br></br>
      <p className="text-base md:text-lg font-medium mb-6 md:mr-64">{body}</p>
    </div>
  );
};

export default PageHeader;
