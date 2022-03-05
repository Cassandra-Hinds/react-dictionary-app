import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  console.log(props.synonyms);
  return (
    <div>
      {" "}
      <div className="title">{props.meaning.partOfSpeech}</div>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="def m-3">{definition.definition}</div>

              <div className="example m-3">
                <em>{definition.example}</em>
              </div>
              <div className="syn">{definition.synonyms}</div>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
