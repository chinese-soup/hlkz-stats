function filterArray(inputArray, filterCriteria, filterFunctions) {
  let data = inputArray;
  Object.entries(filterCriteria).forEach(([key, criteria]) => {
    if (criteria.operator !== "between") {
      // We're filtering by only one value
      if (criteria.value !== undefined) {
        data = data.filter((data) =>
          filterFunctions[key][criteria.operator](data, criteria.value)
        );
      }
    } else {
      // We are filtering with two values
      data = data.filter((data) =>
        filterFunctions[key][criteria.operator](
          data,
          criteria.minValue,
          criteria.maxValue
        )
      );
    }
  });
  return data;
}

export default filterArray;
