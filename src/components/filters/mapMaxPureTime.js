import React from "react";
import { reverseFormatTime } from "../../utils/timeAndDate";

const MapMaxPureTime = ({ setFilterCriteria, defaultValue }) => {
  const handleChange = (event) => {
    const newValue = event.target.value ? event.target.value : defaultValue;
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        maxPureValue: reverseFormatTime(newValue, defaultValue),
      };
    });
  };

  return (
    <div className="filter boundary">
      <input id="boundary-filter" type="text" onChange={handleChange} />
      <label htmlFor="boundary-filter">Max pure time</label>
    </div>
  );
};

export default MapMaxPureTime;
