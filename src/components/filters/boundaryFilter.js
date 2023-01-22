import React, { useEffect, useState } from "react";
import { reverseFormatTime } from "../../utils/timeAndDate";

const BoundaryFilter = ({
  setFilterCriteria,
  criteriaKey,
  label,
  isTimeValue = false,
}) => {
  const [operator, setOperator] = useState("greater than");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    updateFilterCriteria(operator, filterValue);
  }, [filterValue]);

  const updateFilterCriteria = (operator, filterValue) => {
    const defaultValue = operator === "greater than" ? -Infinity : Infinity;
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        [criteriaKey]: {
          value: isTimeValue
            ? reverseFormatTime(filterValue, defaultValue)
            : filterValue,
          operator,
        },
      };
    });
  };

  const handleChange = (operator) => {
    setOperator(operator);
    updateFilterCriteria(operator, filterValue);
  };

  return (
    <div className="filter boundary">
      <input
        id="boundary-filter"
        type="text"
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <label htmlFor="boundary-filter">{label}</label>
      <select value={operator} onChange={(e) => handleChange(e.target.value)}>
        <option value="greater than">Greater than</option>
        <option value="less than">Less than</option>
        <option value="equal to">Equal to</option>
      </select>
    </div>
  );
};

export default BoundaryFilter;
