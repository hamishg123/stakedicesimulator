
const toptext = document.getElementById("headtext");
const slider = document.getElementById("slider");
let rv = Math.floor(Math.random() * 101);
slider.value = rv;
toptext.textContent = rv;