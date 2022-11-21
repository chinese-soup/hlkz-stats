function formatTime(seconds) {
  if (seconds === null) {
    return "-";
  } else {
    seconds = parseFloat(seconds).toFixed(6);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);
    const ms = seconds.slice(-6);

    const pad = (num) => ("000" + num).slice(-2);
    const result = `${pad(m)}:${pad(s)}.${ms.slice(0, 3)}`;

    if (h > 0) {
      return `${pad(h)}:${result}`;
    }

    return result;
  }
}

function formatDate(inputDate) {
  var date = new Date(inputDate);

  var dateString = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return dateString;
}

function formatUnixDate(unixTimeStamp) {
  var date = new Date(unixTimeStamp * 1000);

  var dateString = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return dateString;
}

module.exports = {
  formatTime,
  formatDate,
  formatUnixDate,
};
