let counter = 0;

// Function to increment the counter
function increment() {
  counter++;
  updateCounterDisplay();
  updateDecrementbtnstate();
}

// Function to decrement the counter
function decrement() {
  counter--;
  updateCounterDisplay();
  updateDecrementbtnstate();
}

// Function to update the counter display on the HTML page
function updateCounterDisplay() {
  document.getElementById("counterDisplay").value = counter;
}

// this update the button state

function updateDecrementbtnstate() {
  const decbtn = document.getElementById('btn-2')
  if (counter < 0) {
    decbtn.disabled = true;
  } else {
    decbtn.disabled = false;
  }
}
