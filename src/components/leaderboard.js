import React from "react";
import { Link } from "react-router-dom";
import { formatUnixDate, formatTime } from "../timeAndDate";

const Leaderboard = ({ time, position }) => {
  return (
    <tr>
      <td>{position}</td>
      <td>
        <Link to={`../players/${time.steam64}`}>{time.name}</Link>
      </td>
      <td>{formatTime(time.time)}</td>
      <td>{formatUnixDate(time.date)}</td>
    </tr>
  );
};

export default Leaderboard;
