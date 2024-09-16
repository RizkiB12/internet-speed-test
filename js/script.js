let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitSpeed = document.getElementById("bits");
let kbSpeed = document.getElementById("kbs");
let mbSpeed = document.getElementById("mbs");
let info = document.getElementById("info");

let totalBitSpeed = 0;
let totalKbSpeed = 0;
let totalMbSpeed = 0;
let numTests = 6;
let testCompleted = 0;

//Get random image from unspalh

let imageApi = "https://picsum.photos/200";
//when image loads
image.onload = async function () {
  endTime = new Date().getTime();

  //Get image size
  await fetch(imageApi).then((response) => {
    imageSize = response.headers.get("content-length");
    calculateSpeed();
  });
};

//Function to calculate speed
function calculateSpeed() {
  //TIme taken n seconds
  let timeDuration = (endTime - startTime) / 1000;
  //Total bits
  let loadedBits = imageSize * 8;
  let speedInBts = loadedBits / timeDuration;
  let speedInKbs = speedInBts / 1024;
  let speedInMbs = speedInKbs / 1024;

  totalBitSpeed += speedInBts;
  totalKbSpeed += speedInKbs;
  totalMbSpeed += speedInMbs;

  testCompleted++;

  //If all
  if (testCompleted === numTests) {
    let averageSpeedInBps = (totalBitSpeed / numTests).toFixed(2);
    let averageSpeedInKbps = (totalKbSpeed / numTests).toFixed(2);
    let averageSpeedInMbps = (totalMbSpeed / numTests).toFixed(2);

    //Display average speeds
    bitSpeed.innerHTML += `${averageSpeedInBps}`;
    kbSpeed.innerHTML += `${averageSpeedInKbps}`;
    mbSpeed.innerHTML += `${averageSpeedInMbps}`;
    info.innerHTML = "Test Completed!";
  } else {
    //RUn the next test
    startTime = new Date().getTime();
    image.src = imageApi;
  }
}

// Initial function to start tests

const init = async () => {
  info.innerHTML = "Testing...";
  startTime = new Date().getTime();
  image.src = imageApi;
};

//run test
window.onload = () => {
  for (let i = 0; i < numTests; i++) {
    init();
  }
};
