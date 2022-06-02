const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select source, and pass
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => videoElement.play();
  } catch (error) {
    console.log(error);
  }
};

//Event Listener
button.addEventListener("click", async () => {
  //Disable Button
  button.disabled = true;

  //Start PiP
  await videoElement.requestPictureInPicture();

  //Reset Button
  button.disabled = false;
});

//On Load
selectMediaStream();
