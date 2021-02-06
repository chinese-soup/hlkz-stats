import React from "react";
import ServerList from "./servers";

function PlayItNow() {
  return (
    <div className="section play" id="play">
      <div className="container">
        <h3 className="section-heading">Get started</h3>
        <div className="section-description">
          <h6>
            Official SourceRuns Half-Life KZ servers are available in the
            following locations.
          </h6>
        </div>
        <div className="row">
          <ServerList />
        </div>
      </div>
    </div>
  );
}

export default PlayItNow;
