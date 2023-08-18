import React from "react";

export default function Grid(props) {
  const cells = props.arrOfObj.map((obj) => (
    <div style={{ backgroundColor: "#B19CD8" }} className="item">
      {obj}
    </div>
  ));

  return <div className="container">{cells}</div>;
}
