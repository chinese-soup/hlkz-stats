import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profileHeader";
import { useLocation } from "react-router-dom";
import apiclient from "../apiclient";
import PlayerMaps from "../components/playerMaps";
import LoadingSpinner from "../components/loadingSpinner";

function PlayerProfile() {
  const location = useLocation();
  const { steamId64 } = useParams();
  const [player] = useState(
    location.state !== null ? location.state.player : []
  );
  const [pbs, setPbs] = useState([]);
  const [records, setRecords] = useState([]);
  const [isLoadingPbs, setLoadingPbs] = useState(true);
  const [isLoadingWrs, setLoadingWrs] = useState(true);

  useEffect(() => {
    apiclient.get(`/players/${steamId64}/pbs`).then((response) => {
      setPbs(response.data.data[0]);
      setLoadingPbs(false);
    });
  }, []);

  useEffect(() => {
    apiclient.get(`/players/${steamId64}/wrs`).then((response) => {
      setRecords(response.data.data[0]);
      setLoadingWrs(false);
    });
  }, []);

  return (
    <div className="player-profile">
      <ProfileHeader steamId64={steamId64} player={player} />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h3 className="leaderboard-multiplier">Personal bests</h3>
            {isLoadingPbs && <LoadingSpinner />}
            {!isLoadingPbs && pbs.length === 0 && (
              <div>
                <p>No personal bests found for this player</p>
              </div>
            )}
            {!isLoadingPbs && pbs.length > 0 && (
              <table className="u-full-width">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {pbs.map((map, i) => (
                    <PlayerMaps key={i} map={map} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="one-half column">
            <h3 className="leaderboard-multiplier">World records</h3>
            {isLoadingWrs && <LoadingSpinner />}
            {!isLoadingWrs && records.length === 0 && (
              <div>
                <p>No world records found for this player</p>
              </div>
            )}
            {!isLoadingWrs && records.length > 0 && (
              <table className="u-full-width">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((map, i) => (
                    <PlayerMaps key={i} map={map} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerProfile;
