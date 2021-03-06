import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index}>
              <div className="syn">{synonym}</div>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
