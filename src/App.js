import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([{}]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    async function getRepos() {
      setFetching(true);
      const response = await fetch(
        "https://api.github.com/users/imuhammadumer/repos"
      );
      const data = await response.json();
      setFetching(false);
      setRepos(data);
    }
    getRepos();
  }, []);

  if (fetching) {
    return <div className="App App-header">Loading...</div>;
  }
  return (
    <div className="App App-header">
      <h1>Repo names from Github</h1>
      <ul>
        {repos.map((repoObj, ind) => {
          return <li key={ind}>{repoObj.name}</li>;
        })}
      </ul>
      <p>
        Made by
        <a
          className="App-link"
          href="https://github.com/iMuhammadUmer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muhammad Umer
        </a>
      </p>
    </div>
  );
}

export default App;
