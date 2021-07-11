import React from "react";

function MapRecords({ record, times }) {
  function formatTime(seconds) {
    if (seconds === null) {
      return "-";
    } else {
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
  }

  return (
    <div>
      <div>
        Pure WR: {formatTime(record.pure_wr)}
        <br />
        Pro WR: {formatTime(record.pro_wr)}
      </div>
    </div>
  );
}

export default MapRecords;
