const initCamBtn = document.querySelector("[data-video-botao]");
const camDiv = document.querySelector("[data-camera]");
const camDisplay = document.querySelector("[data-video]");
const snapBtn = document.querySelector("[data-tirar-foto]");
const camCanvas = document.querySelector("[data-video-canvas]");
const doneMsg = document.querySelector("[data-mensagem]");
const sendSnapBtn = document.querySelector("[data-enviar]");
let imageURL = "";

initCamBtn.addEventListener("click", async function () {
  const initCam = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  initCamBtn.style.display = "none";
  camDiv.style.display = "block";
  camDisplay.srcObject = initCam;
});

snapBtn.addEventListener("click", function () {
  camCanvas
    .getContext("2d")
    .drawImage(camDisplay, 0, 0, camCanvas.width, camCanvas.height);

  imageURL = camCanvas.toDataURL("image/jpeg");

  camDiv.style.display = "none";
  doneMsg.style.display = "block";
});

sendSnapBtn.addEventListener("click", () => {
  const getStoredData = localStorage.getItem("cadastro");
  //   const convertData = getStoredData.json(); CANT USE .json() CAUSE ITS ASYNCHRONOUS
  const convertData = JSON.parse(getStoredData);

  convertData.imagem = imageURL;

  localStorage.setItem("cadastro", JSON.stringify(convertData));

  window.location.href = "./abrir-conta-form-3.html";
});
