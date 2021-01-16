import React from "react";

function MapHeader({ record, mapName }) {
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
    <div class="section intro" id="intro">
      <div class="container">
        <div class="row">
          <div class="twelve columns">
            <h2 class="intro-multiplier">{mapName}</h2>
            <h5 class="intro-heading">
              Pro WR:
              <br />
              Pure WR:
            </h5>
            <p class="intro-description"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapHeader;
