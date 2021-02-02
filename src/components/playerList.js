import React from "react";

const PlayerList = ({ player }) => {
  function playerName(realname) {
    if (realname === null) {
      return player.last_nick;
    } else {
      return realname;
    }
  }

  function record(wr) {
    if (wr === null) {
      return "-";
    } else {
      return wr;
    }
  }

  return (
    <tr>
      <td>{playerName(player.realname)}</td>
      <td>{record(player.pure_wrs)}</td>
      <td>{record(player.pro_wrs)}</td>
      <td>{player.beaten_maps}</td>
    </tr>
  );
};

export default PlayerList;
