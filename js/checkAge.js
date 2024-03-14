export default function isLegalAge(field) {
  const birthDate = new Date(field.value);
  if (!checkAge(birthDate)) {
    field.setCustomValidity("Usuario menor de idade");
  }
}

function checkAge(birthDate) {
  const curDate = new Date();
  const legalDate = new Date(
    birthDate.getUTCFullYear() + 18,
    birthDate.getUTCMonth(),
    birthDate.getUTCDate()
  );

  return curDate >= legalDate;
}
