class User {
    constructor(pfp, name) {
        this.pfp = pfp;
        this.name = name;
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