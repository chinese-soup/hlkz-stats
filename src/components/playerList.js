import React from "react";

const PlayerList = ({ player }) => {
  return (
    <tr>
      <td>{player.realname}</td>
      <td>{player.beaten_maps}</td>
    </tr>
  );
};

export default PlayerList;
