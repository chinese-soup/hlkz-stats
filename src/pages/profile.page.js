import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileHeader from "../components/profileHeader";
import { useLocation } from "react-router-dom";

function PlayerProfile() {
  const location = useLocation();
  const { steamId64 } = useParams();
  const [player] = useState(
    location.state !== null ? location.state.player : []
  );

  return (
    <div className="player-profile">
      <ProfileHeader steamId64={steamId64} player={player} />
    </div>
  );
}

export default PlayerProfile;
