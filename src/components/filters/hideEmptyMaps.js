import React from "react";

const HideEmpty = ({ maps, setFilteredMaps }) => {
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

  return (
    <div className="filter">
      <input id="playersTotal-filter" type="checkbox" onChange={handleChange} />
      <label htmlFor="playersTotal-filter">Hide maps without players</label>
    </div>
  );
};

export default HideEmpty;
