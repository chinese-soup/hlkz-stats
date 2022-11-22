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

  useEffect(() => {
    apiclient.get(`/players/${steamId64}/avatar`).then((response) => {
      setAvatar(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    apiclient.get(`/players/${steamId64}`).then((response) => {
      if (response.data.data.length === 0) setEmpty(true);
      if (isPlayerLoading) {
        setPlayerInfo(response.data.data);
      }
      setPlayerLoading(false);
    });
  }, []);

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
            </div>

            <div className="two-thirds column profile-info">
              <h2 className="profileheader-multiplier">
                {isPlayerLoading && <ProfileInfoLoader />}
                {!isPlayerLoading && <div>{formatPlayerName(playerInfo)}</div>}
              </h2>
              {!isPlayerLoading && !isEmpty && (
                <div className="profileheader-description">
                  {playerInfo[0].country !== null && (
                    <div className="country">
                      <img
                        src={
                          "../images/flags/" +
                          playerInfo[0].countryCode +
                          ".png"
                        }
                        alt={playerInfo[0].country}
                      ></img>{" "}
                      {playerInfo[0].country}
                    </div>
                  )}
                  <div className="steam">
                    <i className="fa-brands fa-steam"></i>{" "}
                    <a
                      href={`https://steamcommunity.com/profiles/${steamId64}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Steam profile
                    </a>
                  </div>
                </div>
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
