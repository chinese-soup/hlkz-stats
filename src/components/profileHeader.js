import React, { useEffect, useState } from "react";
import ProfileImage from "./placeholders/profileImage";
import apiclient from "../apiclient";
import ProfileInfoLoader from "./placeholders/profileInfoLoader";

function ProfileHeader({ steamId64, player }) {
  const [isLoading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState([]);
  const [playerInfo, setPlayerInfo] = useState(player);
  const [isPlayerLoading, setPlayerLoading] = useState(
    playerInfo.length === 0 ? true : false
  );
  const [isEmpty, setEmpty] = useState(false);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    apiclient.get(`/players/${steamId64}/avatar`).then((response) => {
      setAvatar(response.data);
      setLoading(false);
    });
  }, [isLoading, setLoading, steamId64]);

  useEffect(() => {
    apiclient.get(`/players/${steamId64}`).then((response) => {
      if (response.data.data.length === 0) setEmpty(true);
      if (isPlayerLoading) {
        setPlayerInfo(response.data.data);
      }
      setCountry(response.data.data[0].country);
      setPlayerLoading(false);
    });
  }, [isPlayerLoading, steamId64]);

  function formatPlayerName(player) {
    if (player[0].realname === null) {
      return player[0].last_nick;
    } else {
      var nameEnding = player[0].realname.slice(-3);
      if (nameEnding[0] === ".") {
        return player[0].realname.slice(0, -4);
      } else {
        return player[0].realname;
      }
    }
  }

  return (
    <div className="profileheader-root">
      <div className="profileheader-image"></div>
      <div className="profileheader" id="profileheader">
        <div className="container">
          <div className="row">
            <div className="one-third column">
              {isLoading && <ProfileImage className="roundedImg" />}
              <img
                className="roundedImg"
                src={avatar}
                style={!isLoading ? {} : { display: "none" }}
                onLoad={() => setLoading(false)}
                alt="Avatar"
              ></img>
              <p className="profileheader-description"></p>
            </div>

            <div className="two-thirds column profile-info">
              <h2 className="profileheader-multiplier">
                {isPlayerLoading && <ProfileInfoLoader />}
                {!isPlayerLoading && <div>{formatPlayerName(playerInfo)}</div>}
              </h2>
              {!isPlayerLoading && !isEmpty && (
                <h5 className="profileheader-heading">{country}</h5>
              )}
              {isEmpty && (
                <h5 className="profileheader-heading">
                  We don't have any information about this player
                </h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
