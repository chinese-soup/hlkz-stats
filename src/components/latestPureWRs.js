import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

const Purefeed = ({ feed }) => {
  function formatTime(seconds) {
    seconds = parseFloat(seconds).toFixed(3);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);
    const ms = seconds.slice(-3);

    const pad = (num) => ("000" + num).slice(-3);
    const padhm = (num) => ("000" + num).slice(-2);
    const result = `${padhm(m)}:${padhm(s)}.${pad(ms)}`;

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
      in {formatTime(feed.time)}
    </li>
  );
};

export default Purefeed;
