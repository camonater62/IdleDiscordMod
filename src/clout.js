
function addclout(button, multiplier) {
    let clout = parseInt(document.getElementById(button).clout, 10);
    clout = isNaN(clout) ? 0 : clout;
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