import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  const alt = "HLKZ";

  return (
    <div className="section intro" id="intro">
      <div className="container">
        <div className="row">
          <div className="two-thirds column">
            <br />
            <br />
            <br />
            <h2 className="intro-multiplier">Half-Life KZ</h2>
            <h5 className="intro-heading">
              A gamemode based on Half-Life that focuses on beating skill
              movement maps as fast as possible.
            </h5>
            <p className="intro-description"></p>
            <Link className="button" to="/maps">
              Browse maps
            </Link>
            <Link className="button" to="/players">
              Browse players
            </Link>
          </div>

          <div className="one-third column logo">
            <img
              className="logo"
              src="images/logo.png"
              width="300px"
              alt={alt}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
