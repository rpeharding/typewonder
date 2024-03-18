export function calculateYearsSince(year) {
  var currentYear = new Date().getFullYear();

  var yearsSince = currentYear - year;

  return yearsSince;
}
