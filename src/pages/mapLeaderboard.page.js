import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MapHeader from "../components/mapHeader";
import apiclient from "../apiclient";
import Leaderboard from "../components/leaderboard";

function MapLeaderboard() {
  const { mapName } = useParams();
  const [times, setLeaderboards] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isLoadingHeader, setLoadingHeader] = useState(true);

  useEffect(() => {
    apiclient.get(`/maps/${mapName}/pure`).then((response) => {
      setLeaderboards(response.data.data);
      setLoading(false);
    });
  }, [mapName]);

  function handleCategoryChange(e) {
    apiclient.get(`/maps/${mapName}/${e.target.value}`).then((response) => {
      setLeaderboards(response.data.data);
    });
  }

  useEffect(() => {
    apiclient.get(`/maps/${mapName}/wr`).then((response) => {
      setRecords(response.data.data);
      setLoadingHeader(false);
    });
  }, [mapName]);

  return (
    <div>
      <div className="map-leaderboard">
        <MapHeader
          mapName={mapName}
          records={records}
          isLoading={isLoading}
          isLoadingHeader={isLoadingHeader}
        />

        <div className="leaderboard" id="leaderboard">
          <div className="container">
            <div className="row">
              {records.length > 0 && (
                <div className="twelve columns">
                  <h3 className="leaderboard-multiplier">Leaderboards</h3>
                  <select defaultValue="pure" onChange={handleCategoryChange}>
                    <option value="pure">Pure</option>
                    <option value="pro">Pro</option>
                  </select>

                  {!isLoading && times.length === 0 && (
                    <div>No times found for the selected category.</div>
                  )}
                  {times.length > 0 && (
                    <table className="u-full-width">
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
                  )}
                </div>
              )}
            </div>
            {/* <a className="button button-primary" href="#browse">
            Load more
          </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapLeaderboard;
