import React, { useState, useEffect } from "react";
import MapHeader from "../components/mapHeader";
import axios from "axios";
import Leaderboard from "../components/leaderboard";

function MapLeaderboard(props) {
  const mapName = props.match.params.map;
  const [times, setLeaderboards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/maps/" + mapName + "/pure")
      .then((response) => {
        console.log("promise fulfilled");
        setLeaderboards(response.data.data);
      });
  }, []);

  function handleCategoryChange(e) {
    console.log(e);
    axios
      .get("http://localhost:3000/maps/" + mapName + "/" + e.target.value)
      .then((response) => {
        console.log("promise fulfilled");
        setLeaderboards(response.data.data);
      });
  }

  return (
    <div className="map-leaderboard">
      <MapHeader mapName={mapName} />

      <div class="section livefeed" id="feed">
        <div class="container">
          <div class="row">
            <div class="twelve columns">
              <h3 class="feed-multiplier">
                <i class="fas fa-trophy"></i> Leaderboards
              </h3>
              <select defaultValue="pure" onChange={handleCategoryChange}>
                <option value="pure">Pure</option>
                <option value="pro">Pro</option>
              </select>

              <table class="u-full-width">
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Player</th>
                    <th>Time</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {times.map((time, i) => (
                    <Leaderboard key={i} time={time} position={i + 1} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <a class="button button-primary" href="#browse">
            Load more
          </a>
        </div>
      </div>
    </div>
  );
}

export default MapLeaderboard;
