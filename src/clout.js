let clout = 0;
let logocounter = 0;
function addclout(button, multiplier) {
    clout += multiplier;
    document.getElementById(button).clout = clout;
    document.getElementById('clout').innerHTML = clout;
}

function visibility(button, x) {
    if (x == 1) {
        document.getElementById(button).style.visibility = "visible";
    } else {
        document.getElementById(button).style.visibility = "hidden";
    }
}

function changeicon() {
    if (logocounter == 0) {
        document.getElementById('icon').src = "imgs/logos/suscord_logo_2.png";
        logocounter = 1;
    } else if (logocounter == 1) {
        document.getElementById('icon').src = "imgs/logos/suscord_logo_3.png";
        logocounter = 2;
    } else if (logocounter == 2) {
        document.getElementById('icon').src = "imgs/logos/suscord_logo.png";
        logocounter = 0;
    }
}