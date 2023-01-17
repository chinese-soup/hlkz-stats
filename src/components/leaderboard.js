import React from "react";
import { Link } from "react-router-dom";
import { formatUnixDate, formatTime } from "../utils/timeAndDate";

const Leaderboard = ({ time, position }) => {
  return (
    <tr>
      <td>{position}</td>
      <td>
        {time.steam64 !== null ? (
          <Link to={`../players/${time.steam64}`}>{time.name}</Link>
        ) : (
          <div>{time.name}</div>
        )}
      </td>
      <td>{formatTime(time.time)}</td>
      <td>{formatUnixDate(time.date)}</td>
    </tr>
  );
};

export default Leaderboard;
