import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import MapList from "../components/mapList";

function Maps() {
  const [maps, setMaps] = useState([]);
  const [isEmpty, setEmpty] = useState(false);

  const page = 2;
  const ref = useRef(page);

  const loopMaps = (page) => {
    axios
      .get("http://localhost:3000/maps" + "?page=" + page)
      .then((response) => {
        const data = response.data.data;
        setEmpty(data.length < 30);
        setMaps([...maps, ...data]);
      });
  };

  useEffect(() => {
    loopMaps(1, page);
  }, []);

  const handleShowMoreMaps = () => {
    loopMaps(ref.current, ref.current + page);
    ref.current += 1;
  };

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
                  <th>Total players</th>
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
        {!isEmpty && (
          <a className="button button-primary" onClick={handleShowMoreMaps}>
            Load more
          </a>
        )}
      </div>
    </div>
  );
}

export default Maps;
