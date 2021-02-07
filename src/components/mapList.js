import React from "react";
import { Link } from "react-router-dom";

const MapList = ({ map }) => {
  function formatTime(seconds) {
    if (seconds === null) {
      return "-";
    } else {
      seconds = parseFloat(seconds).toFixed(6);
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = Math.floor((seconds % 3600) % 60);
      const ms = seconds.slice(-6);

      const pad = (num) => num.slice(0, 3);
      const padhm = (num) => ("000" + num).slice(-2);
      const result = `${padhm(m)}:${padhm(s)}.${pad(ms)}`;

      if (h > 0) {
        return `${pad(h)}:${result}`;
      }

      return result;
    }
  }

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
