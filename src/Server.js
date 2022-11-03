class User {
    constructor() {
        this.pfp = randomPfp();
        this.name = randomUsername();
    }
}

class Message {
    constructor(user, text) {
        this.user = user;
        this.text = text;
    }
}

class TextChannel {
    constructor(name) {
        this.name = name;
        this.messages = [];
    }
}

class VoiceChannel { //name = vc name, users = server.users
    constructor(name,users) {
        this.name = name;
        this.currentUsers = users;
        this.opened = false;
    }
}

class Server {
    constructor(picture, name, membercost, toggleshopbuttons, addshopbuttons) {
        this.picture = picture;

        this.name = name;
        this.cloutgenrate = 0;
        this.membercost = membercost;
        this.users = [];
        this.disconnect_shopbtn = new ShopButton("Disconnect", "disconnectshop", "disconnectswitch", 40, "disconnect_button_cost", false, "red", 20, true);
        this.kick_shopbtn = new ShopButton("Kick", "kickshop", "kickswitch", 80, "kick_button_cost", false, "red", 40, true);
        this.ban_shopbtn = new ShopButton("Ban", "banshop", "banswitch", 160, "ban_button_cost", false, "red", 80, true);

        this.add_member_shopbtn = new ShopButton("Add Member", "addmemberbtn", "addmemberswitch", this.membercost, "add_member_cost", false, "red", 0, false);

        this.toggleshopbuttons = [this.disconnect_shopbtn, this.kick_shopbtn, this.ban_shopbtn].concat(toggleshopbuttons);
        this.addshopbuttons = [this.add_member_shopbtn].concat(addshopbuttons);
        this.textchannels = [];
        this.voicechannels = [];
        this.musicbots = 0;
        this.automuterbots = 0;
    }
    addmember() {
        // TODO: Add no no blink if can't afford
        if (clout >= this.membercost) {
            this.users.push(new User());
            clout -= this.membercost;
        }
    }
    addbot(bot_name){
        if (bot_name == "musicbot" && clout >= 80) {
            this.cloutgenrate += 5;
            this.musicbots += 1;
            clout -= 80;
        }
        else if (bot_name == "automuterbot" && clout >= 160) {
            this.cloutgenrate += 10;
            this.automuterbots += 1;
            clout -= 160;
        }
    }

}