import React, { useState, useEffect, useRef } from "react";
import apiclient from "../apiclient";
import MapList from "../components/mapList";
import LoadingSpinner from "../components/loadingSpinner";

function Maps() {
  const [maps, setMaps] = useState([]);
  const [isEmpty, setEmpty] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const page = 2;
  const ref = useRef(page);

  const loopMaps = (page) => {
    apiclient.get("/maps?page=" + page).then((response) => {
      const data = response.data.data;
      setLoading(false);
      setEmpty(data.length < 30);
      setMaps([...maps, ...data]);
    });
  };

  useEffect(() => {
    loopMaps(1, page);
  }, []);

  const handleShowMoreMaps = () => {
    loopMaps(ref.current, ref.current + page);
    setLoading(true);
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
            Load more
          </div>
        )}
        {isLoading && maps.length > 0 && <LoadingSpinner />}
      </div>
    </div>
  );
}

export default Maps;
