
const toptext = document.getElementById("headtext");
const slider = document.getElementById("slider");
let rv = Math.random(0,100);
slider.value = rv
toptext.textContent = rv;