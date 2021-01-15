import React, { useState, useEffect } from "react";
import axios from "axios";
import PlayerList from "../components/playerList";

function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3000/players").then((response) => {
      console.log("promise fulfilled");
      setPlayers(response.data.data);
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
            <table className="u-full-width">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Maps beaten</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, i) => (
                  <PlayerList key={i} player={player} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <a className="button button-primary" href="#browse">
          Load more
        </a>
      </div>
    </div>
  );
}

export default Players;
