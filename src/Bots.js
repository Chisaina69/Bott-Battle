import React from "react";
import BotssCard from "./ BotsCard";

const Botss = ({ bots, onAddToArmy }) => {
  return (
    <ul>
      {bots.map((bot) => (
        <li key={bot.id}>
          <BotssCard bot={bot} action="add" onClick={() => onAddToArmy(bot)} />
        </li>
      ))}
    </ul>
  );
};

export default Botss;
