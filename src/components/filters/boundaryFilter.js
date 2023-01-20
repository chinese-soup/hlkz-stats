import React, { useEffect, useState } from "react";
import { reverseFormatTime } from "../../utils/timeAndDate";

const BoundaryFilter = ({ setFilterCriteria, criteriaKey }) => {
  const [operator, setOperator] = useState("greater than");
  const [defaultValue, setDefaultValue] = useState(-Infinity);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    setDefaultValue(operator === "greater than" ? -Infinity : Infinity);
  }, [operator]);

  useEffect(() => {
    updateFilterCriteria(operator, filterValue);
  }, [filterValue]);

  const updateFilterCriteria = (operator, filterValue) => {
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        [criteriaKey]: {
          value: reverseFormatTime(filterValue, defaultValue),
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
      <label htmlFor="boundary-filter">{criteriaKey}</label>
      <select value={operator} onChange={(e) => handleChange(e.target.value)}>
        <option value="greater than">Greater than</option>
        <option value="less than">Less than</option>
        <option value="equal to">Equal to</option>
      </select>
    </div>
  );
};

export default BoundaryFilter;
