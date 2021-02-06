import React, { useState, useEffect } from "react";
import MapHeader from "../components/mapHeader";
import apiclient from "../apiclient";
import Leaderboard from "../components/leaderboard";

function MapLeaderboard(props) {
  const mapName = props.match.params.map;
  const [times, setLeaderboards] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    apiclient.get("/maps/" + mapName + "/pure").then((response) => {
      setLeaderboards(response.data.data);
    });
  }, [mapName]);

  function handleCategoryChange(e) {
    apiclient
      .get("/maps/" + mapName + "/" + e.target.value)
      .then((response) => {
        setLeaderboards(response.data.data);
      });
  }

  useEffect(() => {
    apiclient.get("/maps/" + mapName + "/wr").then((response) => {
      setRecords(response.data.data);
    });
  }, [mapName]);

  return (
    <div className="map-leaderboard">
      {records.map((record, i) => (
        <MapHeader key={i} record={record} mapName={mapName} />
      ))}

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
          {/* <a class="button button-primary" href="#browse">
            Load more
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default MapLeaderboard;
