exports.convertToNormalDate = (isoDate) => {
  let date = new Date("2013-03-10T02:00:00Z");
  let newDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  return newDate;
};
