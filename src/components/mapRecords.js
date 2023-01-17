import React from "react";
import { formatTime } from "../utils/timeAndDate";

function MapRecords({ record, times }) {
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
