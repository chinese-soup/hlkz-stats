import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import PlayerList from "../components/playerList";
import Loader from "react-loader-spinner";

function Players() {
  const [players, setPlayers] = useState([]);
  const [isEmpty, setEmpty] = useState(true);
  const [isLoading, setLoading] = useState(true);

  const page = 2;
  const ref = useRef(page);

  const loopPlayers = (page) => {
    axios
      .get("http://localhost:3000/players" + "?page=" + page)
      .then((response) => {
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

            {isLoading && (
              <center>
                <Loader
                  type="Rings"
                  color="#1eaedb"
                  height={100}
                  width={100}
                  timeout={5000}
                />
              </center>
            )}
            {!isLoading && (
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
        {!isEmpty && (
          <a className="button button-primary" onClick={handleShowMorePlayers}>
            Load more
          </a>
        )}
      </div>
    </div>
  );
}

export default Players;
