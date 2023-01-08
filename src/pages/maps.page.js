import React, { useState, useEffect } from "react";
import apiclient from "../apiclient";
import MapList from "../components/mapList";
import LoadingSpinner from "../components/loadingSpinner";
import useSortableData from "../tableSort";
import ShowMoreButton from "../components/showMoreButton";

function Maps() {
  const [maps, setMaps] = useState([]);
  const [filteredMaps, setFilteredMaps] = useState(maps || []);
  const [isLoading, setLoading] = useState(true);
  const { items, requestSort, sortConfig } = useSortableData(filteredMaps);
  const [index, setIndex] = useState(100);

  const handleChange = (event) => {
    if (event.target.checked) {
      const data = maps
        .filter((data) => data.playersTotal > 0)
        .map((filteredName) => {
          return filteredName;
        });
      setFilteredMaps(data);
    } else {
      const data2 = maps;
      setFilteredMaps(data2);
    }
  };

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
      setFilteredMaps(data);
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
              <div>
                <div className="filter">
                  <input
                    id="playersTotal-filter"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <label htmlFor="playersTotal-filter">
                    Hide maps without players
                  </label>
                </div>
                <div>
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
                            Total players{" "}
                            {getSortingDirectionFor("playersTotal")}
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.slice(0, index).map((map, i) => (
                        <MapList key={i} map={map} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
        <ShowMoreButton
          totalMapCount={items.length}
          isLoading={isLoading}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
}

export default Maps;
