import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiclient from "../apiclient";
import ProfileImage from "../components/placeholders/imageProfile";

function PlayerProfile() {
  const { steamId64 } = useParams();
  const [avatar, setAvatar] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiclient.get(`/players/${steamId64}/avatar`).then((response) => {
      setAvatar(response.data);
      setLoading(false);
    });
  }, [steamId64]);

  return (
    <div className="mapheader-root">
      <div
        className="mapheader-image"
        style={{
          backgroundImage: `url("../images/maps/bkz_junglebhop.jpg"), url("../images/background.jpg")`,
        }}
      ></div>
      <div className="mapheader" id="mapheader">
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
              <p className="intro-description"></p>
              {/* <Link className="button" to="/maps">
              Browse maps
            </Link>
            <Link className="button" to="/players">
              Browse players
            </Link> */}
            </div>

            <div className="two-thirds column profile-info">
              <h2 className="intro-multiplier">player</h2>
              <h5 className="intro-heading">info</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerProfile;
