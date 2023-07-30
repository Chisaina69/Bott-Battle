import React, { useEffect, useState } from "react";
import Botss from "./Bots";
import YourBotArmy from "./Botarmy";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const handleAddToArmy = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };

  const handleReleaseFromArmy = (bot) => {
    setEnlistedBots(enlistedBots.filter((b) => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to discharge bot.");
        }

        setEnlistedBots(enlistedBots.filter((b) => b.id !== bot.id));
      })
      .catch((error) => console.error("Error discharging bot:", error));
  };

  return (
    <div className="App">
      <h1>BOT BATTLR</h1>
      <div className="bot-collection">
        <h2>Bot Collection</h2>
        <Botss bots={bots} onAddToArmy={handleAddToArmy} />
      </div>
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        <YourBotArmy
          enlistedBots={enlistedBots}
          onReleaseFromArmy={handleReleaseFromArmy}
          onDischarge={handleDischarge}
        />
      </div>
    </div>
  );
}

export default App;
