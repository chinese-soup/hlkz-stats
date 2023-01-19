function filterArray(inputArray, filterCriteria, filterFunctions) {
  let data = inputArray;
  Object.entries(filterCriteria).forEach(([key, criteria]) => {
    if (criteria.value !== undefined) {
      data = data.filter((data) =>
        filterFunctions[key][criteria.operator](data, criteria.value)
      );
    }
  });
  return data;
}

export default filterArray;
