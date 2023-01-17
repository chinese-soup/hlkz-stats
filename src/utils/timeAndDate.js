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

function reverseFormatTime(formattedTime, defaultValue) {
  // Check for null input
  if (typeof formattedTime !== "string" || !formattedTime.trim()) {
    return defaultValue;
  } else {
    // Split input string by colons
    const parts = formattedTime.split(":");
    let seconds = 0;

    // Check for hours
    if (parts.length === 3) {
      // Add hours, minutes and seconds
      seconds += parseInt(parts[0]) * 3600;
      seconds += parseInt(parts[1]) * 60;
      seconds += parseFloat(parts[2]);
    }

    // Check for minutes
    else if (parts.length === 2) {
      // Add minutes in seconds
      seconds += parseInt(parts[0]) * 60;
      // Add remaining seconds
      seconds += parseFloat(parts[1]);
    }
    // If no minutes or hours
    else if (parts.length === 1) {
      // Add remaining seconds
      seconds += parseFloat(parts[0]);
    }
    // Return total number of seconds
    return seconds;
  }
}

module.exports = {
  formatTime,
  formatDate,
  formatUnixDate,
  reverseFormatTime,
};
