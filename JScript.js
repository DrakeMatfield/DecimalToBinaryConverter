'use strict'

var display;


function Converter_toBinary(display_id, input_id) {

  display = document.getElementById(display_id);

  var value = document.getElementById(input_id).value;
  var message = "";

  console.log("Value enter is: " + value);

  if (validate_Input(value)) {
    var result = outlined(toBirary(value));
    message = value + " binary is equal to: " + result;
    console.log("Turn value to binary: " + result);
  }
  else {
    message = "(" + value + ")" + " is invaild input."
    console.error(message);
  }

  Display(message);
}


function Converter_toDecimal(display_id, input_id) {

  display = document.getElementById(display_id);

  var value = document.getElementById(input_id).value;
  var message = "";

  console.log("Value enter is: " + value);
  if (validate_Input_ofBinary(value)) {
    var result = toDecimal2(value);
    message = value + " decimal is equal to: " + result;
    console.log("Turn value to decimal: " + result);
  }
  else {
    message = "(" + value + ")" + " is invaild input of a binary number."
    console.error(message);
  }

  Display(message);

}

function validate_Input(value) {
  var valid = true;

  console.log("Check to see if input has a value: " + is_There_Input(value));
  valid = (valid && is_There_Input(value));
  console.log("Check to see if value is a number: " + is_a_number(value));
  valid = (valid && is_a_number(value));
  console.log("Checking to see if value is in range 0 - 255: " + is_0_255_Range(value));
  valid = (valid && is_0_255_Range(value));
  console.log("Value is : " + (valid ? "Valid" : "Invalid"));
  return valid;
}

function validate_Input_ofBinary(value) {
  var valid = true;

  console.log("Check to see if input has a value: " + is_There_Input(value));
  valid = (valid && is_There_Input(value));
  console.log("Check to see if value is a number: " + is_a_number(value));
  valid = (valid && is_a_number(value));
  console.log("Check to see if value is a binary: " + is_a_binary_number(value));
  valid = (valid && is_a_binary_number(value));
  console.log("Checking to see if value is in range 0 - 255: " + is_0_255_Range_Binary(value));
  valid = (valid && is_0_255_Range_Binary(value));
  console.log("Value is : " + (valid ? "Valid" : "Invalid"));
  return valid;
}



function is_a_number(value) {
  return !(isNaN(Number(value)));
}

function is_a_binary_number(value) {

  var x;
  var valid = true;
  var checkBit = false;

  for (var i = 1; i <= value.length; i++) {
    x = value.charAt(i);

    checkBit = ((Number(x) === 0) || (Number(x) === 1));

    valid = (valid && checkBit);

  }

  return valid;
}



function is_There_Input(value) {
  return (value.trim() != "");
}

function is_0_255_Range(value) {
  return ((value >= 0) && (value <= 255));
}

function is_0_255_Range_Binary(value) {
  return ((value >= 0) && (value <= 11111111));
}

function toBirary(value) {
  var num = Number(value);
  return num.toString(2);
}

function toDecimal(value) {
  var num = Number(value);
  return num.toString(10);
}

function toDecimal2(value) {

var x;
var ans = 0;
for(var i=1; i <= value.length; i++)
{
x = value.charAt(value.length-i);
ans += x * Math.pow(2, i-1);
}
return ans; 
}



function Display(text) {
  display.innerHTML = text;
}


function outlined(num) {
  var str = "00000000";
  var numlen = num.length;
  var x = str.substr(0, 8 - numlen) + num;
  return x;
}
