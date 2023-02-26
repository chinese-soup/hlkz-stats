import React, { useState, useEffect } from "react";
import apiclient from "../apiclient";
import MapList from "../components/mapList";
import LoadingSpinner from "../components/loadingSpinner";
import useSortableData from "../utils/tableSort";
import ShowMoreButton from "../components/showMoreButton";
import BoundaryFilter from "../components/filters/boundaryFilter";
import filterArray from "../utils/filter";

function Maps() {
  const [maps, setMaps] = useState([]);
  const [filteredMaps, setFilteredMaps] = useState(maps || []);
  const [isLoading, setLoading] = useState(true);
  const { items, requestSort, sortConfig } = useSortableData(filteredMaps);
  const [index, setIndex] = useState(100);
  const [totalMapCount, setTotalMapCount] = useState(items.length);
  const [filterCriteria, setFilterCriteria] = useState({});

  const filterFunctions = {
    playersTotal: {
      "greater than": (data, criteria) => data.playersTotal > criteria,
      "less than": (data, criteria) => data.playersTotal < criteria,
      between: (data, minValue, maxValue) =>
        data.playersTotal >= minValue && data.playersTotal <= maxValue,
    },
    pure_wr: {
      "greater than": (data, criteria) => Number(data.pure_wr) > criteria,
      "less than": (data, criteria) => Number(data.pure_wr) < criteria,
      between: (data, minValue, maxValue) =>
        Number(data.pure_wr) > minValue && Number(data.pure_wr < maxValue),
    },
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

  useEffect(() => {
    // Listen to changes in filterCriteria, then update filtered maps
    setFilteredMaps(filterArray(maps, filterCriteria, filterFunctions));
    console.log(filterCriteria); // debug
  }, [filterCriteria]);

  useEffect(() => {
    // Listen to changes in items array, then update total map count
    setTotalMapCount(items.length);
  }, [items]);

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
            {!isLoading && (
              <div className="filterToggles">
                <BoundaryFilter
                  setFilterCriteria={setFilterCriteria}
                  criteriaKey={"pure_wr"}
                  label={"Pure record"}
                  icon={"fa-solid fa-stopwatch"}
                  isTimeValue={true}
                />
                <BoundaryFilter
                  setFilterCriteria={setFilterCriteria}
                  criteriaKey={"playersTotal"}
                  label={"Total players"}
                  icon={"fa-solid fa-users"}
                />
              </div>
            )}
            {!isLoading && filteredMaps.length === 0 && (
              <div>No results matching your criteria</div>
            )}
            {!isLoading && filteredMaps.length > 0 && (
              <div>
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
          totalMapCount={totalMapCount}
          isLoading={isLoading}
          setIndex={setIndex}
        />
      </div>
    </div>
  );
}

export default Maps;
