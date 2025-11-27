
const toptext = document.getElementById("headtext");
const slider = document.getElementById("slider");
const balence = document.getElementById("balance");
const stake = document.getElementById("stake");
const over = document.getElementById("over");



function bet() {
    const balanceValue = Number(balence.value);
    const stakeValue = Number(stake.value);
    const overValue   = Number(over.value);
    if (balanceValue < stakeValue) {
        toptext.textContent = "You Dont have Enough balence!";
        toptext.style.color = "red"
    }
    else {
        balence.value = balanceValue - stakeValue
        let rv = Math.floor(Math.random() * 101);
        slider.value = rv;
        toptext.textContent = rv;
        toptext.style.color = "white"
        if (rv > over.value) {
            let winChance = 100 - overValue;
            let payoutMultiplier = (100 / winChance) * 0.99;  
            let winnings = stakeValue * payoutMultiplier;

             balence.value = balanceValue + winnings;
        } else {
            
        } 
        
    }
}