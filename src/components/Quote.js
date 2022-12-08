import React from "react";
import "./Quote.css";
/**
 *
 * @param {*} props
 * @returns
 */
//className="Quote-text"
export default function Quote(props) {
  return (
    <div className="quoted">
      <div style={{ alignSelf: "center" }}>
        <div className="UserInfo">
          <img className="photo2" src={props.imagePath} alt={"error"} />
        </div>
        <p>{props.name}</p>
        <p>{props.title}</p>
      </div>
    </div>
  );
}
