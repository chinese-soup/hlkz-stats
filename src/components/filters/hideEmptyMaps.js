import React from "react";

const HideEmpty = ({ setFilterCriteria, defaultValue }) => {
  const handleChange = (event) => {
    const newValue = event.target.checked ? 0 : defaultValue;
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        playersTotal: newValue,
      };
    });
  };

  return (
    <div className="filter">
      <input id="playersTotal-filter" type="checkbox" onChange={handleChange} />
      <label htmlFor="playersTotal-filter">Hide maps without players</label>
    </div>
  );
};

export default HideEmpty;
