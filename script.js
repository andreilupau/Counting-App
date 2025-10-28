

// THE TEXT (RESULT)
let countEl = document.getElementById("count-el");
let count = 0;
// initialize display
countEl.innerText = count;

// helper: update color class based on sign
function updateCountClass() {
  countEl.classList.remove("positive", "negative", "zero");
  if (count > 0) countEl.classList.add("positive");
  else if (count < 0) countEl.classList.add("negative");
  else countEl.classList.add("zero");
}

function animateCount() {
  countEl.classList.add("pop");
  setTimeout(function () {
    countEl.classList.remove("pop");
  }, 200);
}

// Increment by button
function increment() {
  count += 1;
  countEl.innerText = count;
  updateCountClass();
  animateCount();
}

// Decrement by button
function decrement() {
  count -= 1;
  countEl.innerText = count;
  updateCountClass();
  animateCount();
}

// Previous enteries
let logsEl = document.getElementById("logs-el");

function save() {
  // doesn't save zero counts
  if (count === 0) return;

  // create a colored chip for the saved number
  const chip = document.createElement("span");
  const signClass = count > 0 ? "positive" : count < 0 ? "negative" : "zero";
  chip.className = "log-item " + signClass;
  chip.textContent = count;

  // append chip to logs paragraph
  logsEl.appendChild(chip);
  // small spacer
  logsEl.appendChild(document.createTextNode(" "));

  // reset counter
  count = 0;
  countEl.innerText = count;
  updateCountClass();
}
