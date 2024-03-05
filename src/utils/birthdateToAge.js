export function birthdateToAge(birthdate) {
  var today = new Date();
  var birthDateTimestamp = new Date(birthdate);
  var age = today.getFullYear() - birthDateTimestamp.getFullYear();
  var monthDiff = today.getMonth() - birthDateTimestamp.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateTimestamp.getDate())
  ) {
    age--;
  }
  return age;
}
