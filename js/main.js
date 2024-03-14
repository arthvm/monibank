import isLegalAge from "./checkAge.js";
import isValidCPF from "./checkCPF.js";

const formFields = document.querySelectorAll("[required]");

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "tooShort",
  "customError",
];

const messages = {
  nome: {
    valueMissing: "O campo de nome não pode estar vazio.",
    patternMismatch: "Por favor, preencha um nome válido.",
    tooShort: "Por favor, preencha um nome válido.",
  },
  email: {
    valueMissing: "O campo de e-mail não pode estar vazio.",
    typeMismatch: "Por favor, preencha um email válido.",
    tooShort: "Por favor, preencha um e-mail válido.",
  },
  rg: {
    valueMissing: "O campo de RG não pode estar vazio.",
    patternMismatch: "Por favor, preencha um RG válido.",
    tooShort: "O campo de RG não tem caractéres suficientes.",
  },
  cpf: {
    valueMissing: "O campo de CPF não pode estar vazio.",
    patternMismatch: "Por favor, preencha um CPF válido.",
    customError: "O CPF digitado não existe.",
    tooShort: "O campo de CPF não tem caractéres suficientes.",
  },
  aniversario: {
    valueMissing: "O campo de data de nascimento não pode estar vazio.",
    customError: "Você deve ser maior que 18 anos para se cadastrar.",
  },
  termos: {
    valueMissing: "Você deve aceitar nossos termos antes de continuar.",
  },
};

formFields.forEach((field) => {
  field.addEventListener("blur", () => {
    checkField(field);
  });

  field.addEventListener("invalid", (event) => {
    event.preventDefault();
  });
});

function checkField(field) {
  let message = "";
  field.setCustomValidity("");

  switch (field.name) {
    case "cpf":
      if (field.value.length >= 11) {
        isValidCPF(field);
      }
      break;
    case "aniversario":
      if (field.value != "") {
        isLegalAge(field);
      }
      break;
  }

  errorTypes.forEach((error) => {
    if (field.validity[error]) {
      message = messages[field.name][error];
    }
  });

  const errorMessage = field.parentNode.querySelector(".mensagem-erro");

  field.checkValidity() == true
    ? (errorMessage.textContent = "")
    : (errorMessage.textContent = message);
}
