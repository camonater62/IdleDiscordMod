let clout = 1000;
let logocounter = 0;

class ShopButton {
    constructor(text, div_name, button_name, cost, cost_name, is_bought, button_color, cloutgen, toggleable) {
        this.text = text;
        this.div_name = div_name;
        this.button_name = button_name;
        this.cost = cost;
        this.is_bought = is_bought;
        this.is_visible = is_bought;
        this.button_color = button_color;
        this.cost_name = cost_name;
        this.cloutgen = cloutgen
        this.toggleable = toggleable
    }
    updatebutton() {
        if (this.is_bought) {
            document.getElementById(this.cost_name).style.color = "lime";
            this.button_color = "lime";
        }
        else if (clout >= this.cost) {
            if (this.toggleable) {document.getElementById(this.button_name).disabled = false};
            document.getElementById(this.cost_name).style.color = "aquamarine";
            this.button_color = "aquamarine";
        }
        else {
            if (this.button_color != "red") {
                document.getElementById(this.cost_name).style.color = "red";
                this.button_color = "red";
            }
        }
    }
    togglebutton() {
        if (clout >= this.cost) {
            document.getElementById(this.button_name).disabled = true;
            this.is_bought = true
            clout -= this.cost;
            document.getElementById(this.cost_name).style.color = "lime";
            this.button_color = "lime";
            if (this.button_name == "disconnectswitch") {
                visibility('disconnectbtn', 1);
                visibility('kickshop', 1);
            } else if (this.button_name == "kickswitch") {
                visibility('kickbtn', 1);
                visibility('banshop', 1);
            } else if (this.button_name == "banswitch") {
                visibility('banbtn', 1);
            }
        }
    }
}

function kickuser() {
    currentServer.users.pop();
    console.log(currentServer.users);
    clout += 40;
}

function banuser() {
    currentServer.users.pop();
    console.log(currentServer.users);
    clout += 80;
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
