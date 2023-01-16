import React from "react";
import { reverseFormatTime } from "../../timeAndDate";

const MapMinPureTime = ({ setFilterCriteria, defaultValue }) => {
  const handleChange = (event) => {
    const newValue = event.target.value ? event.target.value : defaultValue;
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        minPureValue: reverseFormatTime(newValue, defaultValue),
      };
    });
  };

  return (
    <div className="filter boundary">
      <input id="boundary-filter" type="text" onChange={handleChange} />
      <label htmlFor="boundary-filter">Min pure time</label>
    </div>
  );
};

export default MapMinPureTime;
