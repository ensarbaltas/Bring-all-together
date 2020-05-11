
var degre;
function toCelsius(f) {
  var degre = (5/9) * (f-32)  ;
  return degre;
}
document.getElementById("Celcius").innerHTML = "temperature : "+  50 + " Fahreneit, " + toCelsius(50) + " degre "

function handler1() {
  alert('Thanks!');
};

function handler2() {
  alert('Thanks again!');
}

elem.onclick = () => alert("Hello");
elem.addEventListener("click", handler1); // Thanks!
elem.addEventListener("click", handler2); // Thanks again!

