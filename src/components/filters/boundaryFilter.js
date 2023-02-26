import React, { useEffect, useState } from "react";
import { reverseFormatTime } from "../../utils/timeAndDate";

const BoundaryFilter = ({
  setFilterCriteria,
  criteriaKey,
  label,
  icon,
  isTimeValue = false,
}) => {
  const [operator, setOperator] = useState("greater than");
  const [filterValue, setFilterValue] = useState("");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [open, setOpen] = useState(false);
  const [between, setBetween] = useState(false);

  useEffect(() => {
    updateFilterCriteria(operator, filterValue, minValue, maxValue);
  }, [filterValue, minValue, maxValue]);

  const processValue = (value, defaultValue) => {
    if (isTimeValue) {
      // if it's a time value
      return reverseFormatTime(value, defaultValue); // convert time to seconds
    }
    if (value) {
      return value; // otherwise use value if it's present
    } else {
      return defaultValue; // if not present, use defaultValue
    }
  };

  const updateFilterCriteria = (operator, filterValue, minValue, maxValue) => {
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        [criteriaKey]: {
          minValue: processValue(minValue, -Infinity),
          maxValue: processValue(maxValue, Infinity),
          value: processValue(
            filterValue,
            operator === "greater than" ? -Infinity : Infinity
          ),
          operator,
        },
      };
    });
  };

  const handleChange = (operator) => {
    setOperator(operator);
    operator === "between" ? setBetween(true) : setBetween(false);
    updateFilterCriteria(operator, filterValue);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleBlur = (e) => {
    const currentTarget = e.currentTarget;

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // Change open state to be closed
        setOpen(false);
      }
    }, 0);
  };

  return (
    <div
      className={open ? "filter boundary active" : "filter boundary"}
      tabIndex="1"
      onBlur={handleBlur}
    >
      <div className="dropdown" onClick={handleOpen}>
        <i className={icon}></i> {label}{" "}
        {!open && <i className="fa-solid fa-angle-down"></i>}
        {open && <i className="fa-solid fa-angle-up"></i>}
      </div>
      <div className={open ? "menu" : "menu hidden"}>
        <select value={operator} onChange={(e) => handleChange(e.target.value)}>
          <option value="greater than">Greater than</option>
          <option value="less than">Less than</option>
          <option value="between">Between</option>
        </select>
        {!between ? (
          <input
            id="boundary-filter"
            type="text"
            placeholder={label}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        ) : (
          <div>
            <input
              className="minValue"
              id="boundary-filter"
              type="text"
              placeholder="Lowest value"
              onChange={(e) => setMinValue(e.target.value)}
            />
            <input
              className="maxValue"
              id="boundary-filter"
              type="text"
              placeholder="Highest value"
              onChange={(e) => setMaxValue(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BoundaryFilter;
