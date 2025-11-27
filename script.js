
const toptext = document.getElementById("headtext");
const slider = document.getElementById("slider");
const balence = document.getElementById("balence");
const stake = document.getElementById("stake");
const over = document.getElementById("over");

let rv = Math.floor(Math.random() * 101);
slider.value = rv;
toptext.textContent = rv;

function bet() {
    if (balence <= stake) {
        toptext.textContent = "You Dont have Enough balence!";
        toptext.style.color = "red"
    }
}