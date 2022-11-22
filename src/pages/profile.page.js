import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profileHeader";
import { useLocation } from "react-router-dom";
import PersonalMaps from "../components/profile/personalMaps";

function PlayerProfile() {
  const location = useLocation();
  const { steamId64 } = useParams();
  const [player] = useState(
    location.state !== null ? location.state.player : []
  );

  return (
    <div className="player-profile">
      <ProfileHeader steamId64={steamId64} player={player} />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h3 className="leaderboard-multiplier">Personal bests</h3>
            <PersonalMaps steamId64={steamId64} type={"pbs"} />
          </div>
          <div className="one-half column">
            <h3 className="leaderboard-multiplier">World records</h3>
            <PersonalMaps steamId64={steamId64} type={"wrs"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerProfile;
