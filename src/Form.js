import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [searchTerm, SetSearchTerm] = useState(null);
  const [message, setMessage] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }
  function Searching(event) {
    event.preventDefault();

    setMessage(searchTerm);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);

    console.log(message);
  }
  function UpdateSearchTerm(event) {
    SetSearchTerm(event.target.value);
  }
  function show() {
    if (message === null) {
      return <div className="title">"Enter a Word"</div>;
    } else {
      return <div className="title">{message}</div>;
    }
  }
  return (
    <div>
      <form onSubmit={Searching}>
        <input type="text" placeholder="search" onChange={UpdateSearchTerm} />
        <input type="submit" value="submit" />
      </form>
      <div className="title">{show()}</div>
    </div>
  );
}
