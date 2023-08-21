import React from "react";

import "./WordSpin.css";

//Don't ask me how this works, this was ripped straight from the internet and customized to not look too doo doo cheeks

export default function WordSpin() {
  const values = [
    "the next big thing",
    "a new social network",
    "a community of makers",
    "a new startup",
  ];
  return (
    <div class="slidingVertical">
      {values.map((content) => (
        <span>{content}</span>
      ))}
    </div>
  );
}
