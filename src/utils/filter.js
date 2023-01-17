function filterArray(array, filterCriteria, filterFunctions) {
  let data = array;
  Object.entries(filterCriteria).forEach(([key, criteria]) => {
    if (criteria !== undefined) {
      data = data.filter((data) => filterFunctions[key](data, criteria));
    }
  });
  return data;
}

module.exports = {
  filterArray,
};
