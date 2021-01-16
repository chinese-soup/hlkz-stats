import React from "react";

function PlayItNow() {
  return (
    <div className="section play" id="play">
      <div className="container">
        <h3 className="section-heading">Get started</h3>
        <p className="section-description">
          <h6>
            Official SourceRuns Half-Life KZ servers are available in the
            following locations.
          </h6>
        </p>
        <div className="row">
          <ul style={{ listStyle: `none`, margin: `0 auto` }}>
            <li>
              <img src="images/flags/lt.png"></img> play.sourceruns.org:27016
            </li>
            <li>
              <img src="images/flags/gb.png"></img> 212.71.238.124:27015
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlayItNow;
