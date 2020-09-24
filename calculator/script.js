const display = document.getElementById('display');

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');

const squareRootBtn = document.getElementById('sqr')
const exponentiationBtn = document.getElementById('exp')
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const decimalBtn = document.getElementById('decimal');
const clearBtns = document.querySelectorAll('.clear-btn');
const result = document.getElementById('result');

let newNumber = false;
let firstValue = 0;
let action = ''

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', function (e) {
    numberPress(e.target.textContent);
  });
}

for (var i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click', function (e) {
    operationPress(e.target.textContent);
  });
}

for (var i = 0; i < clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
    clear(e.target.textContent);
  });
}

decimalBtn.addEventListener('click', decimal);

exponentiationBtn.addEventListener('click', exponentiation);
squareRootBtn.addEventListener('click', squareRoot);
plus.addEventListener("click", summation);
minus.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
divide.addEventListener("click", division);
result.addEventListener("click", equally);




function numberPress(number) {
  if (newNumber) {
    display.value = number;
    newNumber = false;
  } else {
    if (display.value === '0') {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function equally() {

  newNumber = true;
  if (action == "exp") {
    return display.value = Math.pow(firstValue, display.value)
  }
  if (action == "plus") {
    return display.value = Number(firstValue) + Number(display.value)
  }
  if (action == "minus") {
    return display.value = Number(firstValue) - Number(display.value)
  }
  if (action == "multiply") {
    return display.value = Number(firstValue) * Number(display.value)
  }
  if (action == "divide") {
    return display.value = Number(firstValue) / Number(display.value)
  }
}

function decimal() {
  let localDecimal = display.value;

  if (newNumber) {
    localDecimal = '0.';
    newNumber = false;
  } else {
    if (localDecimal.indexOf('.') === -1) {
      localDecimal += '.';
    }
  }
  display.value = localDecimal;
}

function squareRoot() {
  display.value >= 0 ? display.value = Math.sqrt(display.value) : display.value = "Нельзя"
  newNumber = true;
}

function exponentiation() {
  firstValue = display.value;
  action = "exp";
  newNumber = true;
}

function summation() {
  firstValue = display.value;
  action = "plus";
  newNumber = true;
}

function subtraction() {
  firstValue = display.value;
  action = "minus";
  newNumber = true;
}

function multiplication() {
  firstValue = display.value;
  action = "multiply";
  newNumber = true;
}

function division() {
  firstValue = display.value;
  action = "divide";
  newNumber = true;
}

function clear(id) {
  if (id === 'ce') {
    display.value = '0';
    newNumber = true;
  } else if (id === 'c') {
    display.value = '0';
    newNumber = true;
    action = "";
    firstValue = "";
  }
}