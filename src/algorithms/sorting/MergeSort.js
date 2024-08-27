// Canvas variables
var canvas, canvaswidth, canvasheight, ctrl;

// 3 array are declared

//1) arr is for storing array element
//2) itmd for storing intermediate values
//3) visited is for element which has been sorted
var arr = [],
  itmd = [],
  visited = [];

// Length of unsorted array
var len_of_arr = null;

// State to track the current step
let currentStepResolve;
let isNextStepClicked = false;

function initialization(input_arr) {
  arr = [];
  itmd = [];
  visited = [];

  // Store random value in arr[]
  // for (var i = 0; i < len_of_arr; i++) {
  //   arr.push(Math.round(Math.random() * 250));
  // }

  arr = input_arr;
  console.log(input_arr.length);
  len_of_arr = input_arr.length;

  // Initialize itmd and visited array with 0
  for (var i = 0; i < len_of_arr; i++) {
    itmd.push(0);
    visited.push(0);
  }

  // document
  //   .getElementById("nextStepButton")
  //   .addEventListener("click", handleNextButtonClick);
}

// Merging of two sub array
function mergeArray(start, end) {
  let mid = parseInt((start + end) >> 1);
  let start1 = start,
    start2 = mid + 1;
  let end1 = mid,
    end2 = end;

  // Initial index of merged subarray
  let index = start;

  while (start1 <= end1 && start2 <= end2) {
    if (arr[start1] <= arr[start2]) {
      itmd[index] = arr[start1];
      index = index + 1;
      start1 = start1 + 1;
    } else if (arr[start1] > arr[start2]) {
      itmd[index] = arr[start2];
      index = index + 1;
      start2 = start2 + 1;
    }
  }

  // Copy the remaining elements of
  // arr[], if there are any
  while (start1 <= end1) {
    itmd[index] = arr[start1];
    index = index + 1;
    start1 = start1 + 1;
  }

  while (start2 <= end2) {
    itmd[index] = arr[start2];
    index = index + 1;
    start2 = start2 + 1;
  }

  index = start;
  while (index <= end) {
    arr[index] = itmd[index];
    index++;
  }
}

// Function for showing visualization
// effect
function drawBars(start, end) {
  // Clear previous unsorted bars
  if (!ctrl) return;
  ctrl.clearRect(0, 0, 1000, 1500);

  const barWidth = 40; // Width of each bar
  const maxBarHeight = 300; // Maximum height for bars
  const barSpacing = 10; // Space between bars
  const bottomMargin = 200; // Space at the bottom of the bars

  // Calculate the total width of all bars including spacing
  const totalWidth = len_of_arr * (barWidth + barSpacing) - barSpacing;

  // Calculate the starting x position to center the bars
  const startX = (canvaswidth - totalWidth) / 2;

  // Styling of bars
  for (let i = 0; i < len_of_arr; i++) {
    // Changing styles of bars
    ctrl.fillStyle = "black";
    ctrl.shadowOffsetX = 2;
    ctrl.shadowColor = "chocolate";
    ctrl.shadowBlur = 3;
    ctrl.shadowOffsetY = 5;

    // Calculate the height of each bar proportional to maxBarHeight
    const barHeight = (arr[i] / Math.max(...arr)) * maxBarHeight;

    // Size and position of rectangle for bars
    const xPosition = startX + i * (barWidth + barSpacing);
    const yPosition = canvasheight - barHeight - bottomMargin;

    ctrl.fillRect(xPosition, yPosition, barWidth, barHeight);

    if (visited[i]) {
      ctrl.fillStyle = "#006d13";
      ctrl.fillRect(xPosition, yPosition, barWidth, barHeight);
      ctrl.shadowOffsetX = 2;
    }
  }

  for (let i = start; i <= end; i++) {
    const xPosition = startX + i * (barWidth + barSpacing);
    const yPosition =
      canvasheight - (arr[i] / Math.max(...arr)) * maxBarHeight - bottomMargin;

    ctrl.fillStyle = "orange";
    ctrl.fillRect(
      xPosition,
      yPosition,
      barWidth - 2,
      (arr[i] / Math.max(...arr)) * maxBarHeight
    );
    ctrl.fillStyle = "#cdff6c";
    ctrl.fillRect(xPosition, canvasheight, barWidth - 2, 18);
    visited[i] = 1;
  }
}

// Waiting interval between two bars
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Wait for the next step button click
function waitForNextStep() {
  return new Promise((resolve) => {
    currentStepResolve = resolve;
  });
}

// Handle the "Next Step" button click
export function nextStep() {
  if (currentStepResolve) {
    currentStepResolve();
    currentStepResolve = null;
  }
}

// Merge Sorting
const mergeSort = async (start, end) => {
  if (start < end) {
    let mid = parseInt((start + end) >> 1);
    await mergeSort(start, mid);
    await mergeSort(mid + 1, end);
    await mergeArray(start, end);
    await drawBars(start, end);
    await waitForNextStep();
  }
};

// canvasElements function for storing
// width and height in canvas variable
function canvasElements() {
  canvas = document.getElementById("Canvas");
  if (!canvas) return;
  canvas.width = 1000;
  canvas.height = 1000;
  canvaswidth = canvas.width;
  canvasheight = canvas.height;
  ctrl = canvas.getContext("2d");
}

// Asynchronous MergeSort function
export const performer = async (data) => {
  initialization(data);
  canvasElements();
  if (!canvas) return;
  await mergeSort(0, len_of_arr - 1);
  await drawBars();
};

export function restart(data) {
  performer(data);
}
