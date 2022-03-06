import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
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
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />{" "}
              </div>
            );
          })}
        </div>
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
