import React, { useState } from "react";

export default function Form() {
  const [searchTerm, SetSearchTerm] = useState(null);
  const [message, setMessage] = useState("Searching");
  function Searching(event) {
    event.preventDefault();

    setMessage(searchTerm);
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
