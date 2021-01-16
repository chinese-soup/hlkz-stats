import React from "react";

const PlayerList = ({ player }) => {
  return (
    <tr>
      <td>{player.realname}</td>
      <td>{player.pure_wrs}</td>
      <td>{player.pro_wrs}</td>
      <td>{player.beaten_maps}</td>
    </tr>
  );
};

export default PlayerList;
