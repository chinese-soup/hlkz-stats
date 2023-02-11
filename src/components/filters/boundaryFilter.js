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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    updateFilterCriteria(operator, filterValue);
  }, [filterValue]);

  const updateFilterCriteria = (operator, filterValue) => {
    const defaultValue = operator === "greater than" ? -Infinity : Infinity;
    setFilterCriteria((prevCriteria) => {
      return {
        ...prevCriteria,
        [criteriaKey]: {
          value: isTimeValue // if it's a time value
            ? reverseFormatTime(filterValue, defaultValue) // convert time to seconds
            : filterValue // otherwise use filterValue if it's present
            ? filterValue
            : defaultValue, // if not present, use defaultValue
          operator,
        },
      };
    });
  };

  const handleChange = (operator) => {
    setOperator(operator);
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
      {open && (
        <div className="menu">
          <select
            value={operator}
            onChange={(e) => handleChange(e.target.value)}
          >
            <option value="greater than">Greater than</option>
            <option value="less than">Less than</option>
            <option value="equal to">Equals to</option>
          </select>
          <input
            id="boundary-filter"
            type="text"
            placeholder={label}
            onChange={(e) => setFilterValue(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default BoundaryFilter;
