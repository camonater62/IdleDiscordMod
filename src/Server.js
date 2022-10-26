class User {
    constructor(pfp, name) {
        this.pfp = pfp;
        this.name = name;
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

class VoiceChannel {
    constructor(name) {
        this.currentUsers = [];
    }
}

class Server {
    constructor(picture, name) {
        this.picture = picture;
        this.name = name;

        this.users = [];

        this.textchat = "";
    }
}