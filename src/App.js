import React from "react";
import "./App.css";
import Botss from "./Bots";
import { useEffect, useState } from "react";


function App() {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  return (
    <div className="App">
    <h1>BOT BATTLR</h1>
    <Botss bots={bots}/>
    </div>
  );
}

export default App;
