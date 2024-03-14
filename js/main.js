import isLegalAge from "./checkAge.js";
import isValidCPF from "./checkCPF.js";

const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
  field.addEventListener("blur", () => {
    checkField(field);
  });
});

function checkField(field) {
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
}
