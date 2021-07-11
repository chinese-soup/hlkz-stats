import React from "react";
import { Link } from "react-router-dom";

import ReactTimeAgo from "react-time-ago";

const Purefeed = ({ feed }) => {
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

  return (
    <li>
      {feed.nickname} on{" "}
      <b>
        <Link to={`/maps/${feed.map_name}`}>{feed.map_name}</Link>
      </b>{" "}
      in {formatTime(feed.time)} <br />
      <ReactTimeAgo date={new Date(feed.date)} locale="en-US" />
    </li>
  );
};

export default Purefeed;
