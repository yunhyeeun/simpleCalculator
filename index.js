const numBtn = document.querySelectorAll(".number");
const signBtn = document.querySelectorAll(".sign");
const display = document.querySelector(".calculator-display");
const resetBtn = document.querySelector(".reset");
const resultBtn = document.querySelector(".result");
let val = "";
let nums = [];
let signs = [];

function getNumber(event) {
  const btn = event.target;
  if (val === "0" && btn.value != 0) {
    val = btn.value;
  } else {
    val += btn.value;
  }
  display.innerHTML = val;
}

function getSign(event) {
  const btn = event.target;
  nums.push(parseInt(val, 10));
  val = "";
  signs.push(btn.value);
}

function setReset(event) {
  val = "0";
  nums = [];
  signs = [];
  display.innerHTML = val;
}

function operation(a, b, op) {
  let result = 0;
  if (op === "+") {
    result = a + b;
  } else if (op === "-") {
    result = a - b;
  } else if (op === "*") {
    result = a * b;
  } else {
    result = a / b;
  }
  return result;
}

function calculate(event) {
  nums.push(parseInt(val, 10));
  nums.reverse();
  signs.reverse();
  let a = nums.pop();
  while (nums.length > 0) {
    let b = nums.pop();
    let op = signs.pop();
    a = operation(a, b, op);
  }
  display.innerHTML = a;
}

function init() {
  for (var i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", getNumber);
  }
  for (i = 0; i < signBtn.length; i++) {
    signBtn[i].addEventListener("click", getSign);
  }
  resetBtn.addEventListener("click", setReset);
  resultBtn.addEventListener("click", calculate);
}
init();
