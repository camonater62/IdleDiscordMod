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
    }
}

class Server {
    constructor(picture, name) {
        this.picture = picture;

        this.name = name;

        this.users = [];

        this.textchannels = [];
        this.voicechannels = [];
    }
}