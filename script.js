
var degre;
function toCelsius(f) {
  var degre = (5/9) * (f-32)  ;
  return degre;
}
document.getElementById("Celcius").innerHTML = "temperature : "+  50 + " Fahreneit, " + toCelsius(50) + " degre "



