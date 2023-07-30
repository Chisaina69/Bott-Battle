import React from "react";
import BotssCard from "./ BotsCard";

const YourBotArmy = ({ enlistedBots, onReleaseFromArmy, onDischarge }) => {
  return (
    <ul>
      {enlistedBots.map((bot) => (
        <li key={bot.id}>
          <BotssCard
            bot={bot}
            action="release"
            onClick={() => onReleaseFromArmy(bot)}
          />

          <button onClick={() => onDischarge(bot)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default YourBotArmy;
