import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Form() {
  const [searchTerm, SetSearchTerm] = useState(null);
  const [message, setMessage] = useState(null);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }
  function Searching(event) {
    event.preventDefault();

    setMessage(searchTerm);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pixelsApiKey =
      "563492ad6f917000010000015d28d9d10d154e4cb7a7893c8a8a6905";

    let pixelsApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=9`;
    let headers = { Authorization: `Bearer ${pixelsApiKey}` };
    axios.get(pixelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
          <Photos photos={photos} />
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
