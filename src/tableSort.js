import { useState, useMemo } from "react";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        // Do not change null positions
        if (a[sortConfig.key] === null) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (b[sortConfig.key] === null) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        if (sortConfig.key === "date") {
          if (Date.parse(a[sortConfig.key]) < Date.parse(b[sortConfig.key])) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (Date.parse(a[sortConfig.key]) > Date.parse(b[sortConfig.key])) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
        }
        if (!isNaN(parseFloat(a[sortConfig.key]))) {
          // Check if we are sorting numbers
          if (parseFloat(a[sortConfig.key]) < parseFloat(b[sortConfig.key])) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (parseFloat(a[sortConfig.key]) > parseFloat(b[sortConfig.key])) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
        } else {
          // We are sorting strings
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "descending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "descending"
    ) {
      direction = "ascending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default useSortableData;
