import React, { useState, useEffect, useRef } from "react";
import apiclient from "../apiclient";
import PlayerList from "../components/playerList";
import LoadingSpinner from "../components/loadingSpinner";

function Players() {
  const [allPlayers, setAllPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const [isEmpty, setEmpty] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = useState(100);

  const ref = useRef(index + 100);

  const loopPlayers = (index) => {
    setPlayers(allPlayers.slice(0, index));
    setEmpty(players.length + 100 > allPlayers.length);
  };

  useEffect(() => {
    apiclient.get("/players").then((response) => {
      const data = response.data.data;
      setLoading(false);
      setAllPlayers(data);
      setPlayers(data.slice(0, index));
    });
  }, []);

  const handleShowMorePlayers = () => {
    loopPlayers(ref.current, ref.current + index);
    setIndex((ref.current += 100));
  };

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
                    <th>Name</th>
                    <th>Pure WRs</th>
                    <th>Maps beaten</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((player, i) => (
                    <PlayerList key={i} player={player} />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        {!isEmpty && !isLoading && (
          <div
            className="button button-primary"
            onClick={handleShowMorePlayers}
          >
            Show more
          </div>
        )}
      </div>
    </div>
  );
}

export default Players;
