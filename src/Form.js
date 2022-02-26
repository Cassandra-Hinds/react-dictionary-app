import React, { useState } from "react";

export default function Form() {
  const [searchTerm, SetSearchTerm] = useState(null);
  const [message, setMessage] = useState(null);
  function Searching(event) {
    event.preventDefault();

    setMessage(searchTerm);

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
