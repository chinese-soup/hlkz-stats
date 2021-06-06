import React from "react";

const PlayerList = ({ player }) => {
  function playerName(realname) {
    if (realname === null) {
      return player.last_nick;
    } else {
      var nameEnding = realname.slice(-3);
      if (nameEnding[0] === ".") {
        var country = nameEnding.slice(-2);
        return (
          <div>
            <img
              src={"images/flags/" + country + ".png"}
              alt={country.toUpperCase()}
            ></img>{" "}
            {realname.slice(0, -4)}
          </div>
        );
      } else {
        return realname;
      }
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
