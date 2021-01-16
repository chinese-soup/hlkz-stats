import React, { useState, useEffect } from "react";
import axios from "axios";
import MapList from "../components/mapList";

function Maps() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3000/maps").then((response) => {
      console.log("promise fulfilled");
      setMaps(response.data.data);
    });
  }, []);

  return (
    <div className="section livefeed" id="feed">
      <div className="container">
        <p className="feed-description"></p>
        <div className="row">
          <div className="twelve columns">
            <h3 className="feed-multiplier">
              <i className="far fa-map"></i> Maps
            </h3>
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Pure WR</th>
                  <th>Pro WR</th>
                  <th>Total times</th>
                </tr>
              </thead>
              <tbody>
                {maps.map((map, i) => (
                  <MapList key={i} map={map} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <a className="button button-primary" href="#browse">
          Load more
        </a>
      </div>
    </div>
  );
}

export default Maps;
