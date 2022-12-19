import React, { useState, useEffect } from "react";
import apiclient from "../apiclient";
import PlayerList from "../components/playerList";
import LoadingSpinner from "../components/loadingSpinner";
import useSortableData from "../tableSort";
import ShowMoreButton from "../components/showMoreButton";

function Players() {
  const [players, setPlayers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { items, requestSort, sortConfig } = useSortableData(players);
  const [index, setIndex] = useState(100);

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
    apiclient.get("/players").then((response) => {
      const data = response.data.data;
      setLoading(false);
      setPlayers(data);
    });
  }, []);

  return (
    <div className="section livefeed" id="feed">
      <div className="container">
        <p className="feed-description"></p>
        <div className="row">
          <div className="twelve columns">
            <h3 className="feed-multiplier">
              <i className="fas fa-walking"></i> Players
            </h3>
            {isLoading && players.length === 0 && <LoadingSpinner />}
            {(!isLoading || players.length > 0) && (
              <table className="u-full-width">
                <thead>
                  <tr>
                    <th>
                      <button>Name</button>
                    </th>
                    <th>
                      <button onClick={() => requestSort("pure_wrs")}>
                        Pure WRs {getSortingDirectionFor("pure_wrs")}
                      </button>
                    </th>
                    <th>
                      <button onClick={() => requestSort("beaten_maps")}>
                        Maps beaten {getSortingDirectionFor("beaten_maps")}
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.slice(0, index).map((player, i) => (
                    <PlayerList key={i} player={player} />
                  ))}
                </tbody>
              </table>
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

export default Players;
