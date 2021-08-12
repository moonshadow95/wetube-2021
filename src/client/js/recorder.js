const startBtn = document.querySelector("#startBtn");
const video = document.querySelector("#preview");

const handleStart = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  video.srcObject = stream;
  video.play();
};

startBtn.addEventListener("click", handleStart);
