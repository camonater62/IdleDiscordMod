let clout = 0;

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