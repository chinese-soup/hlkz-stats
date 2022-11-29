import React, { useState, useEffect, useRef } from "react";
import apiclient from "../apiclient";
import MapList from "../components/mapList";
import LoadingSpinner from "../components/loadingSpinner";
import useSortableData from "../tableSort";

function Maps() {
  const [maps, setMaps] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { items, requestSort, sortConfig } = useSortableData(maps);

  const getSortingDirectionFor = (name) => {
    if (!sortConfig) {
      return;
    }
    if (sortConfig.key === name && sortConfig.direction === "ascending") {
      return <i className="fa-solid fa-sort-up"></i>;
    }
    if (sortConfig.key === name && sortConfig.direction === "descending") {
      return <i className="fa-solid fa-sort-down"></i>;
    }
  };

  useEffect(() => {
    apiclient.get("/maps").then((response) => {
      const data = response.data.data;
      setLoading(false);
      setMaps(data);
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
            {isLoading && maps.length === 0 && <LoadingSpinner />}
            {(!isLoading || maps.length > 0) && (
              <table className="u-full-width">
                <thead>
                  <tr>
                    <th>
                      <button onClick={() => requestSort("name")}>
                        Name {getSortingDirectionFor("name")}
                      </button>
                    </th>
                    <th>
                      <button onClick={() => requestSort("pure_wr")}>
                        Pure WR {getSortingDirectionFor("pure_wr")}
                      </button>
                    </th>
                    <th>
                      <button onClick={() => requestSort("pro_wr")}>
                        Pro WR {getSortingDirectionFor("pro_wr")}
                      </button>
                    </th>
                    <th>
                      <button onClick={() => requestSort("playersTotal")}>
                        Total players {getSortingDirectionFor("playersTotal")}
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((map, i) => (
                    <MapList key={i} map={map} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        {/* {!isEmpty && !isLoading && (
          <div className="button button-primary" onClick={handleShowMoreMaps}>
            Show more
          </div>
        )} */}
      </div>
    </div>
  );
}

export default Maps;
