import React from "react";
import { Link } from "react-router-dom";
import { formatTime } from "../timeAndDate";

const MapList = ({ map }) => {
  return (
    <tr>
      <td>
        <Link to={`/maps/${map.name}`}>{map.name}</Link>
      </td>
      <td>{formatTime(map.pure_wr)}</td>
      <td>{formatTime(map.pro_wr)}</td>
      <td>{map.playersTotal}</td>
    </tr>
  );
};

export default MapList;
