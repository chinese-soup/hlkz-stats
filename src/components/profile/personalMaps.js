import PlayerMaps from "../playerMaps";
import React, { useState, useEffect } from "react";
import apiclient from "../../apiclient";
import LoadingSpinner from "../loadingSpinner";
import useSortableData from "../../utils/tableSort";
import ShowMoreButton from "../showMoreButton";

const PersonalMaps = ({ steamId64, type }) => {
  const [maps, setMaps] = useState([]);
  const { items, requestSort, sortConfig } = useSortableData(maps);
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = useState(100);
  const [isLoaded, setLoaded] = useState(false);

  function handleCategoryChange(e) {
    setLoading(true);
    apiclient
      .get(`/players/${steamId64}/${type}/${e.target.value}`)
      .then((response) => {
        const data = response.data.data[0];
        setLoading(false);
        setMaps(data);
        setLoaded(index > data.length);
      });
  }

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
    apiclient.get(`/players/${steamId64}/${type}`).then((response) => {
      const data = response.data.data[0];
      setLoading(false);
      setMaps(data);
      setLoaded(index > data.length);
    });
  }, []);

  return (
    <div>
      <div className="profileMapsHeader">
        {type === "wrs" && (
          <h3 className="leaderboard-multiplier">World records</h3>
        )}
        {type === "pbs" && (
          <h3 className="leaderboard-multiplier">Personal bests</h3>
        )}
        <select defaultValue="pure" onChange={handleCategoryChange}>
          <option value="pure">Pure</option>
          <option value="pro">Pro</option>
        </select>
      </div>
      {isLoading && <LoadingSpinner />}
      {!isLoading && maps.length === 0 && (
        <div>No records found for this player</div>
      )}
      {!isLoading && maps.length > 0 && (
        <table className="u-full-width">
          <thead>
            <tr>
              <th>
                <button onClick={() => requestSort("name")}>
                  Name {getSortingDirectionFor("name")}
                </button>
              </th>
              <th>
                <button onClick={() => requestSort("bestTime")}>
                  Time {getSortingDirectionFor("bestTime")}
                </button>
              </th>
              <th>
                <button onClick={() => requestSort("date")}>
                  Date {getSortingDirectionFor("date")}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {items.slice(0, index).map((map, i) => (
              <PlayerMaps key={i} map={map} />
            ))}
          </tbody>
        </table>
      )}
      <div className="centered">
        <ShowMoreButton
          totalMapCount={items.length}
          isLoading={isLoading}
          setIndex={setIndex}
          isLoaded={isLoaded}
          setLoaded={setLoaded}
        />
      </div>
    </div>
  );
};

export default PersonalMaps;
