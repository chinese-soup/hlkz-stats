import React, { useState, useEffect, useRef } from "react";
import apiclient from "../apiclient";
import MapList from "../components/mapList";
import LoadingSpinner from "../components/loadingSpinner";

function Maps() {
  const [allMaps, setAllMaps] = useState([]);
  const [maps, setMaps] = useState([]);
  const [isEmpty, setEmpty] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = useState(100);

  const ref = useRef(index + 100);

  const loopMaps = (index) => {
    setMaps(allMaps.slice(0, index));
    setEmpty(maps.length + 100 > allMaps.length);
  };

  useEffect(() => {
    apiclient.get("/maps").then((response) => {
      const data = response.data.data;
      setLoading(false);
      setAllMaps(data);
      setMaps(data.slice(0, index));
    });
  }, []);

  const handleShowMoreMaps = () => {
    loopMaps(ref.current, ref.current + index);
    setIndex((ref.current += 100));
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
            {isLoading && maps.length === 0 && <LoadingSpinner />}
            {(!isLoading || maps.length > 0) && (
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
            )}
          </div>
        </div>
        {!isEmpty && !isLoading && (
          <div className="button button-primary" onClick={handleShowMoreMaps}>
            Show more
          </div>
        )}
      </div>
    </div>
  );
}

export default Maps;
