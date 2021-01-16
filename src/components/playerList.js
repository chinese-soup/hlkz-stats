import React from "react";

const PlayerList = ({ player }) => {
  return (
    <tr>
      <td>{player.realname}</td>
      <td>123</td>
      <td>123</td>
      <td>{player.beaten_maps}</td>
    </tr>
  );
};

export default PlayerList;
