import React, { useState } from "react";

export default function Form() {
  const [searchTerm, SetSearchTerm] = useState(null);
  const [message, setMessage] = useState(null);
  function Searching(event) {
    event.preventDefault();

    setMessage(searchTerm);

    console.log(message);
    if (message === null) {
      return <div className="title">"Enter a Word"</div>;
    } else {
      return message;
    }
  }
  function UpdateSearchTerm(event) {
    SetSearchTerm(event.target.value);
  }
  return (
    <div>
      <form onSubmit={Searching}>
        <input type="text" placeholder="search" onChange={UpdateSearchTerm} />
        <input type="submit" value="submit" />
      </form>
      <div className="title">{message}</div>
    </div>
  );
}
