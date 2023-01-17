import React from "react";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import { formatTime } from "../utils/timeAndDate";

const Purefeed = ({ feed }) => {
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
