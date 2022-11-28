import PlayerMaps from "../playerMaps";
import React, { useState, useEffect, useRef } from "react";
import apiclient from "../../apiclient";
import LoadingSpinner from "../loadingSpinner";

const PersonalMaps = ({ steamId64, type }) => {
  const [allMaps, setAllMaps] = useState([]);
  const [maps, setMaps] = useState([]);
  const [isEmpty, setEmpty] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [index, setIndex] = useState(100);

  const ref = useRef(index + 100);

  const loopMaps = (index) => {
    const newBatch = allMaps;
    setMaps(newBatch);
    setEmpty(newBatch.length >= allMaps.length);
  };

  const handleShowAllMaps = () => {
    loopMaps(ref.current, ref.current + index);
    setIndex((ref.current += 100));
  };

  function handleCategoryChange(e) {
    setLoading(true);
    apiclient
      .get(`/players/${steamId64}/${type}/${e.target.value}`)
      .then((response) => {
        const data = response.data.data[0];
        setLoading(false);
        setAllMaps(data);
        const firstBatch = data.slice(0, index);
        setMaps(firstBatch);
        setEmpty(firstBatch.length >= data.length);
      });
  }

  useEffect(() => {
    apiclient.get(`/players/${steamId64}/${type}`).then((response) => {
      const data = response.data.data[0];
      setLoading(false);
      setAllMaps(data);
      const firstBatch = data.slice(0, index);
      setMaps(firstBatch);
      setEmpty(firstBatch.length >= data.length);
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
              <th>Name</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {maps.map((map, i) => (
              <PlayerMaps key={i} map={map} />
            ))}
          </tbody>
        </table>
      )}
      {!isEmpty && !isLoading && (
        <center>
          <div className="button button-primary" onClick={handleShowAllMaps}>
            Show all
          </div>
        </center>
      )}
    </div>
  );
};

export default PersonalMaps;
