import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Form from "./Form";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="container">
      <div className="title m-5">Cassandra's Dictionary</div>
      <Form />
      <div className="credit">
        This project was coded by Cassandra L. Hinds and is open-sourced on{" "}
        <a
          href="https://github.com/Cassandra-Hinds/react-dictionary-app"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://reverent-payne-4e4f01.netlify.app"
          target={"_blank"}
          rel="noreferrer"
        >
          Netlify
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
