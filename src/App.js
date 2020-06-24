import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let data = { title: "Title" };
  const [todo, setTodo] = useState(data);
  const [fetching, setFetching] = useState(false);
  const [isData, setData] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setFetching(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      let data2 = await response.json();
      setTodo(data2);
      setFetching(false);
      console.log("data", data);
    }
    fetchData();
  }, [isData]);

  if (fetching) {
    return <div className="App App-header">Loading...</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Fetched data from API: {todo.title}</p>
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
      </header>
    </div>
  );
}

export default App;
