export default function isLegalAge(field) {
  const birthDate = new Date(field.value);
  if (checkAge(birthDate)) {
    console.log("Maior de idade!");
  } else {
    console.log("Menor de Idade!");
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
