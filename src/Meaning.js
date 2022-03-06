import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div>
      {" "}
      <div className="part-of-speech">{props.meaning.partOfSpeech}</div>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <section>
                <ul className="def m-3">
                  <li>{definition.definition}</li>
                </ul>

                <div className="example m-3">
                  <em>{definition.example}</em>
                </div>

                <Synonyms synonyms={definition.synonyms} />
              </section>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
