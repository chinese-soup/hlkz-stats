import React from "react";

function MapHeader({ mapName }) {
  return (
    <div class="section intro" id="intro">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <h2 class="intro-multiplier">{mapName}</h2>
            <h5 class="intro-heading">
              Pro WR: 30.986
              <br />
              Pure WR: 30.986
            </h5>
            <p class="intro-description"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapHeader;
