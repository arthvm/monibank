const initCamBtn = document.querySelector("[data-video-botao]");
const camDiv = document.querySelector("[data-camera]");
const camDisplay = document.querySelector("[data-video]");

initCamBtn.addEventListener("click", async function () {
  const initCam = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });

  initCamBtn.style.display = "none";
  camDiv.style.display = "block";
  camDisplay.srcObject = initCam;
});
