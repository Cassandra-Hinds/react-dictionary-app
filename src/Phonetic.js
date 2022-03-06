import React from "react";

export default function Phonetic(props) {
  return (
    <div className="phonet-pronun">
      <div className="phonetic">{props.phonetic.text}</div>
      <a
        href={props.phonetic.audio}
        target={"_blank"}
        className="pronunciation"
      >
        Pronunciation
      </a>
    </div>
  );
}
