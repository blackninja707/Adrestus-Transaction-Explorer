export function timestampConverter(timestamp) {
  let date = new Date(timestamp);

  // Leading zero helper function for formatting
  function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
  }
  // Format the date and time
  let formattedDate =
    addLeadingZero(date.getUTCMonth() + 1) +
    "/" +
    addLeadingZero(date.getUTCDate()) +
    "/" +
    date.getUTCFullYear() +
    ", " +
    addLeadingZero(date.getUTCHours()) +
    ":" +
    addLeadingZero(date.getUTCMinutes()) +
    ":" +
    addLeadingZero(date.getUTCSeconds());

  return formattedDate;
}
