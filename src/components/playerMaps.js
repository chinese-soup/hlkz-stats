import React from "react";
import { Link } from "react-router-dom";
import { formatDate, formatTime } from "../timeAndDate";

const PlayerMaps = ({ map }) => {
  return (
    <tr>
      <td>
        <Link to={`/maps/${map.name}`}>{map.name}</Link>
      </td>
      <td>{formatTime(map.bestTime)}</td>
      <td>{formatDate(map.date)}</td>
    </tr>
  );
};

export default PlayerMaps;
