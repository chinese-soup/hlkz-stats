import React, { useState, useEffect, useRef } from "react";
import apiclient from "../apiclient";
import PlayerList from "../components/playerList";
import LoadingSpinner from "../components/loadingSpinner";

function Players() {
  const [players, setPlayers] = useState([]);
  const [isEmpty, setEmpty] = useState(true);
  const [isLoading, setLoading] = useState(true);

  const page = 2;
  const ref = useRef(page);

  const loopPlayers = (page) => {
    apiclient.get("/players?page=" + page).then((response) => {
      const data = response.data.data;
      setLoading(false);
      setEmpty(data.length < 30);
      setPlayers([...players, ...data]);
    });
  };

  useEffect(() => {
    loopPlayers(1, page);
  }, []);

  const handleShowMorePlayers = () => {
    loopPlayers(ref.current, ref.current + page);
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
              <i className="fas fa-walking"></i> Players
            </h3>
            {isLoading && players.length === 0 && <LoadingSpinner />}
            {(!isLoading || players.length > 0) && (
              <table className="u-full-width">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Pure WRs</th>
                    <th>Pro WRs</th>
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
            Load more
          </div>
        )}
        {isLoading && players.length > 0 && <LoadingSpinner />}
      </div>
    </div>
  );
}

export default Players;
