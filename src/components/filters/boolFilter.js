import React from "react";

const BoolFilter = ({ setFilterCriteria, defaultValue, criteriaKey }) => {
  const handleChange = (event) => {
    const newValue = event.target.checked ? 0 : defaultValue;
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        [criteriaKey]: newValue,
      };
    });
  };

  return (
    <div className="filter">
      <input id="boolean-filter" type="checkbox" onChange={handleChange} />
      <label htmlFor="boolean-filter">{criteriaKey}</label>
    </div>
  );
};

export default BoolFilter;
