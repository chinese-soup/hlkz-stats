import React from "react";
import { Link } from "react-router-dom";

const Leaderboard = ({ time, position }) => {
  function formatTime(seconds) {
    seconds = parseFloat(seconds).toFixed(6);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);
    const ms = seconds.slice(-6);

    const pad = (num) => ("000" + num).slice(-2);
    const result = `${pad(m)}:${pad(s)}.${ms.slice(0, 3)}`;

    if (h > 0) {
      return `${pad(h)}:${result}`;
    }

    return result;
  }

  function formatDate(unixTimeStamp) {
    var date = new Date(unixTimeStamp * 1000);

    var dateString = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return dateString;
  }

  return (
    <tr>
      <td>{position}</td>
      <td>
        <Link to={`../players/${time.steam64}`}>{time.name}</Link>
      </td>
      <td>{formatTime(time.time)}</td>
      <td>{formatDate(time.date)}</td>
    </tr>
  );
};

export default Leaderboard;
