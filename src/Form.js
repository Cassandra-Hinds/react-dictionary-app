import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Form() {
  const [searchTerm, SetSearchTerm] = useState(null);
  const [message, setMessage] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function Searching(event) {
    event.preventDefault();

    setMessage(searchTerm);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function UpdateSearchTerm(event) {
    SetSearchTerm(event.target.value);
  }
  function show() {
    if (message === null || message === undefined || message === "") {
      return <div className="sub-title">Enter a word...</div>;
    } else {
      return (
        <div>
          <div className="keyterm">{message}</div>

          <Results results={results} />
        </div>
      );
    }
  }
  return (
    <div>
      <form onSubmit={Searching}>
        <input
          type="text"
          placeholder="Search"
          autoFocus="on"
          onChange={UpdateSearchTerm}
        />
      </form>

      <div className="title">{show()}</div>
    </div>
  );
}
