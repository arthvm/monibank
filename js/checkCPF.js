export default function isValidCPF(field) {
  const cpf = field.value.replace(/\.|-/g, "");
  if (
    checkForRepeatNum(cpf) ||
    checkInvalidFirstDigit(cpf) ||
    checkInvalidSecondDigit(cpf)
  ) {
    field.setCustomValidity("CPF invalido");
  }
}

function checkForRepeatNum(cpf) {
  const repeatedNumbers = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];

  return repeatedNumbers.includes(cpf);
}

function checkInvalidFirstDigit(cpf) {
  let sum = 0;
  let multiplier = 10;

  for (let index = 0; index < 9; index++) {
    sum += cpf[index] * multiplier;
    multiplier--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }

  return sum != cpf[9];
}

function checkInvalidSecondDigit(cpf) {
  let sum = 0;
  let multiplier = 11;

  for (let index = 0; index < 10; index++) {
    sum += cpf[index] * multiplier;
    multiplier--;
  }

  sum = (sum * 10) % 11;

  if (sum == 10 || sum == 11) {
    sum = 0;
  }

  return sum != cpf[10];
}
