import React from "react";

import BotssCard from "./ BotsCard";
const Botss = ({ bots }) => {
  const handleOnClick = (bot) => {
    // Do something when the BotssCard is clicked
    console.log("Bot clicked:", bot);
  };

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id}>
            <BotssCard bot={bot} action="add" onClick={() => handleOnClick(bot)} />
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Botss;
