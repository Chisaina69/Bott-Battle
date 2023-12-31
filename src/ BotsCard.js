
import React from "react";

const BotssCard = ({ bot, action, onClick }) => {
  return (
    <>
      <img src={bot.avatar_url} alt="Bots" />
      <h1>{bot.name}</h1>
      <p>health: {bot.health}</p>
      <p>damage: {bot.damage}</p>
      <p>armor: {bot.armor}</p>
      <p>bot_class: {bot.bot_class}</p>
      <p>catchphrase: {bot.catchphrase}</p>
      <p>created_at: {bot.created_at}</p>
      <p>updated_at: {bot.updated_at}</p>
      {/* Render a button for the corresponding action */}
      {action === "add" && <button onClick={onClick}>Add to Army</button>}
      {action === "release" && <button onClick={onClick}>Release from Army</button>}
    </>
  );
};

export default BotssCard;
