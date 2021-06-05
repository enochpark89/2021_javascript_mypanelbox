
// button selectors
const textBox = document.getElementById("numberTextBox");
const numberOne = document.getElementById("1");
const numberTwo = document.getElementById("2");
const numberThree = document.getElementById("3");
const numberFour = document.getElementById("4");
const numberFive = document.getElementById("5");
const numberSix = document.getElementById("6");
const numberSeven = document.getElementById("7");
const numberEight = document.getElementById("8");
const numberNine = document.getElementById("9");

const plus = document.getElementById("+");
const minus = document.getElementById("-");
const mult = document.getElementById("*");
const div = document.getElementById("/");
const equal = document.getElementById("=");

const clear = document.getElementById("C");

// Calculate
let result = 0;
let arr = [];
textBox.value = '0';

function numberButtonHandler(event) {
  textBox.value += event.target.innerHTML;
  // if the first value is 0 delete that digit.
  if (textBox.value[0] === "0") {
    textBox.value = textBox.value.substring(1, textBox.value.length);
  }
}

function symbolButtonHandler(event) {
    if(arr.length ===0){
    arr.push(textBox.value);
    arr.push(event.target.innerHTML);
    } else if (arr.length >=2){
      console.log(arr);
    }
  // push the pressed button to an array.

  // if (arr.length >= 2)
  // {
  //   switch (arr[1]) {
  //     case '+':
  //       result = parseInt(arr[0]) + parseInt(textBox.value);
  //       break;
  //     case '-':
  //       break;
  //     case '*':
  //       break;
  //     case '/':
  //       break;
  //     default:
  //       break;
// }

//   } else {
//     arr.push(textBox.value);
//     arr.push(event.target.innerHTML);
//     textBox.value ='0';
//     console.log(arr);
//   }

}

function clearButtonHandler() {
  textBox.value = 0;
  arr = [];
}

// Event handler for numbers
numberOne.addEventListener("click", numberButtonHandler);
numberTwo.addEventListener("click", numberButtonHandler);
numberThree.addEventListener("click", numberButtonHandler);
numberFour.addEventListener("click", numberButtonHandler);
numberFive.addEventListener("click", numberButtonHandler);
numberSix.addEventListener("click", numberButtonHandler);
numberSeven.addEventListener("click", numberButtonHandler);
numberEight.addEventListener("click", numberButtonHandler);
numberNine.addEventListener("click", numberButtonHandler);

// Event handler for +, -, *, /, =
plus.addEventListener("click", symbolButtonHandler);
minus.addEventListener("click", symbolButtonHandler);
mult.addEventListener("click", symbolButtonHandler);
div.addEventListener("click", symbolButtonHandler);
equal.addEventListener("click", symbolButtonHandler);

// Event handler for Clear
clear.addEventListener("click", clearButtonHandler);
