import React from "react";

export default function determineWinner(props) {
  return (
    <button
      className={"square squareID-" + props.squareId}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
