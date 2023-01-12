import React from "react";

const MapMinPureTime = ({ setFilterCriteria, defaultValue, applyFilter }) => {
  const handleChange = (event) => {
    const newValue = event.target.value ? event.target.value : defaultValue;
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        minPureValue: newValue,
      };
    });
  };

  return (
    <div className="filter">
      <input id="playersTotal-filter" type="text" onChange={handleChange} />
      <label htmlFor="playersTotal-filter">Min pure time</label>
    </div>
  );
};

export default MapMinPureTime;
