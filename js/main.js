import isACPF from "./checkCPF.js";

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
        isACPF(field);
      }
      break;
  }
}
