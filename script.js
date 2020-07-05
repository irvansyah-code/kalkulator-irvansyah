window.onload = function() { jam(); }

 function jam() {
  var e = document.getElementById('jam'),
  d = new Date(), h, m, s;
  h = d.getHours();
  m = set(d.getMinutes());
  s = set(d.getSeconds());

  e.innerHTML = h +':'+ m +':'+ s;

  setTimeout('jam()', 1000);
 }

 function set(e) {
  e = e < 10 ? '0'+ e : e;
  return e;
 }

function addCharacter(input, character) {
if(input.value == null || input.value == "0")
input.value = character
else
input.value += character
}
var val = 0.0;
function PI(input) {
val = input.value;
input.value = input.value * "3.14159265359"
}
var val = 0.0;
function percent(input) {
val = input.value;
input.value = input.value * "0.01"
}
function changeSign(input) {
if(input.value.substring(0, 1) == "-")
input.value = input.value.substring(1, input.value.length)
else
input.value = "-" + input.value
}

function compute(form) {
form.display.value = eval(form.display.value);
}
function square(form) {
form.display.value = eval(form.display.value) * eval(form.display.value)
}
function sin(form) {
form.display.value = Math.sin(form.display.value);
}
function cos(form) {
form.display.value = Math.cos(form.display.value);
}
function tan(form) {
form.display.value = Math.tan(form.display.value);
}
function sqrt(form) {
form.display.value = Math.sqrt(form.display.value);
}
function ln(form) {
form.display.value = Math.log(form.display.value);
}
function exp(form) {
form.display.value = Math.exp(form.display.value);
}
function deleteCharacter(input) {
input.value = input.value.substring(0, input.value.length - 1)
}
function checkNum(str) {
for (var i = 0; i < str.length; i++) {
var ch = str.charAt(i);
if (ch < "0" || ch > "9") {
if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
&& ch != "(" && ch!= ")" && ch != "%") {
alert("Data tidak valid!")
return false
}
}
}
return true
}
