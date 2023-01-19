import React, { useEffect, useState } from "react";
import { reverseFormatTime } from "../../utils/timeAndDate";

const BoundaryFilter = ({ setFilterCriteria, criteriaKey }) => {
  const [operator, setOperator] = useState("greater than");
  const [defaultValue, setDefaultValue] = useState(-Infinity);

  useEffect(() => {
    setDefaultValue(operator === "greater than" ? -Infinity : Infinity);
  }, [operator]);

  const handleChange = (event) => {
    const newValue = event.target.value ? event.target.value : defaultValue;
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        [criteriaKey]: {
          value: reverseFormatTime(newValue, defaultValue),
          operator,
        },
      };
    });
  };

  return (
    <div className="filter boundary">
      <input id="boundary-filter" type="text" onChange={handleChange} />
      <label htmlFor="boundary-filter">{criteriaKey}</label>
      {/* TODO: Make filter criteria update on operator change */}
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="greater than">Greater than</option>
        <option value="less than">Less than</option>
        <option value="equal to">Equal to</option>
      </select>
    </div>
  );
};

export default BoundaryFilter;
