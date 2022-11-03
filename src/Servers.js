// This file should probably have a different name
// or Server.js should have a different name

// this is the starter/initial server
const smallFriendServer = new Server("imgs/server-icons/smallfriendserver.png", "Me and my buds :D");
smallFriendServer.unlockcount = 0;
smallFriendServer.users = Userlist(7); //add 7 users
smallFriendServer.textchannels = [
    new TextChannel("# general"),
    new TextChannel("# empty text"),
];
smallFriendServer.voicechannels = Vclist(1,smallFriendServer.users);//add 2 voice channels with random members

const bigFriendServer = new Server("imgs/server-icons/bigfriendserver.png", "band of bonobos");
bigFriendServer.unlockcount = 50;
bigFriendServer.users = Userlist(10);
bigFriendServer.textchannels = Tclist(2);
bigFriendServer.voicechannels = Vclist(1,bigFriendServer.users);

const classServer = new Server("imgs/server-icons/classserver.png", "AM 1 Fall 2022");
classServer.unlockcount = 250;
classServer.users = Userlist(50);
classServer.textchannels = Tclist(3);
classServer.voicechannels = Vclist(3, classServer.users);

const clubServer = new Server("imgs/server-icons/clubserver.png", "Slug Art Club");
clubServer.unlockcount = 1000;
clubServer.users = Userlist(250);
clubServer.textchannels = Tclist(5);
clubServer.voicechannels = Vclist(5, clubServer.users);

const streamerServer = new Server("imgs/server-icons/unknown.png", "Yamakara's Vtuber Server");
streamerServer.unlockcount = 10000;
streamerServer.users = Userlist(500);
streamerServer.textchannels = Tclist(10);
streamerServer.voicechannels = Vclist(5, streamerServer.users);

const subredditServer = new Server("imgs/server-icons/subredditserver.png", "r/idle");
subredditServer.unlockcount = 100000;
subredditServer.users = Userlist(750);
subredditServer.textchannels = Tclist(10);
subredditServer.voicechannels = Vclist(5, subredditServer.users);

const gameServer = new Server("imgs/server-icons/gameserver.png", "Official Cubeworld™ Server");
gameServer.unlockcount = 1000000;
gameServer.users = Userlist(1250);
gameServer.textchannels = Tclist(20);
gameServer.voicechannels = Vclist(10, gameServer.users);

const allServers = [smallFriendServer, bigFriendServer, classServer, clubServer, streamerServer, subredditServer, gameServer];

function Userlist(num){           // generate random userlist for new server, num = numbers of users
    names=[];
    for(var i =0; i<num; i++){
        names.push(new User());
    }
    return names;
}

function Voiceuser(users){       // randomly pick a few users from server user list to show up in the voice channel
    names=[];
    var voice_users = Math.floor(Math.random()*Math.min(users.length, 20));
    for(var i =0; i<voice_users; i++){
        names.push(users[i]);
        //console.log(users[i].name);
    }
    return names;
}


function Tclist(num) {
    tc = [];
    for (let i = 0; i < num; i++) {
        tc.push(new TextChannel(i + 1));
    }
    return tc;
}

function Vclist(num, users){     //num = voice channel numbers
                                 //add num voice channels to server
    vc=[];
    for(var i =0; i<num; i++){
        vc.push(new VoiceChannel("this is a new voice channel",Voiceuser(users)));
    }
    return vc;
}


