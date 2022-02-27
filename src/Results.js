import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);

  if (
    props.results === null ||
    props.results === undefined ||
    props.results === ""
  ) {
    return null;
  } else {
    return (
      <div>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                {" "}
                <Meaning meaning={meaning} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
