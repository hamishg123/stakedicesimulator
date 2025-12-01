

const toptext = document.getElementById("headtext");
const slider = document.getElementById("slider");
const balence = document.getElementById("balance");
const stake = document.getElementById("stake");
const over = document.getElementById("over");



function bet() {
    const message = document.createElement("h3");
    const balanceValue = Number(balence.value);
    const stakeValue = Number(stake.value);
    const overValue   = Number(over.value);
    slider.low = overValue;
    slider.high = overValue + 1;
    if (balanceValue < stakeValue || over.value <= 1 || over.value >= 100) {
        if (over.value <= 1 || over.value >= 100) {
         toptext.textContent = "Land Over Must Be Bigger Then 1 and Smaller then 100!";
        toptext.style.color = "red"
    }
        else {
        toptext.textContent = "You Dont have Enough balence!";
        toptext.style.color = "red"
        }

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
            balence.value = Number(balence.value) + winnings;
            message.textContent = "+" + winnings;
            message.style.color = "lightgreen";
            document.getElementById("msgbox").prepend(message);
            
        } else {

            message.textContent = "-" + stakeValue;
            message.style.color = "tomato";
            document.getElementById("msgbox").prepend(message);
        } 
        
    }
}
function half() {
    
    stake.value /= 2
}

function double() {
    
    stake.value *= 2
}
function updateover() {
    let marker = document.getElementById("marker");
    let changeby =  55/100 * (over.value - 47);
    console.log(changeby);
    marker.style.marginLeft =  changeby - 7  + "%";
}