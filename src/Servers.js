// This file should probably have a different name
// or Server.js should have a different name

// this is the starter/initial server
const smallFriendServer = new Server("imgs/server-icons/smallfriendserver.png", "Me and my buds :)");
smallFriendServer.users = Userlist(7); //add 7 users
smallFriendServer.textchannels = [
    new TextChannel("# general"),
    new TextChannel("# empty text"),
];
smallFriendServer.voicechannels = Vclist(1,smallFriendServer.users);//add 2 voice channels with random members

const bigFriendServer = new Server("imgs/server-icons/bigfriendserver.png", "2 buds 2 furious");
bigFriendServer.users = Userlist(10);
bigFriendServer.textchannels = Tclist(2);
bigFriendServer.voicechannels = Vclist(1,bigFriendServer.users);

const classServer = new Server("imgs/server-icons/classserver.png", "Class Server");
classServer.users = Userlist(50);
classServer.textchannels = Tclist(3);
classServer.voicechannels = Vclist(3, classServer.users);

const clubServer = new Server("imgs/server-icons/clubserver.png", "Club Server");
clubServer.users = Userlist(250);
clubServer.textchannels = Tclist(5);
clubServer.voicechannels = Vclist(5, clubServer.users);

const streamerServer = new Server("imgs/server-icons/streamerserver.png", "Streamer Server");
streamerServer.users = Userlist(1250);
streamerServer.textchannels = Tclist(10);
streamerServer.voicechannels = Vclist(10, streamerServer.users);

const subredditServer = new Server("imgs/server-icons/subredditserver.png", "Subreddit Server");
subredditServer.users = Userlist(12500);
subredditServer.textchannels = Tclist(20);
subredditServer.voicechannels = Vclist(20, subredditServer.users);

const gameServer = new Server("imgs/server-icons/gameserver.png", "Game Server");
gameServer.users = Userlist(125000);
gameServer.textchannels = Tclist(40);
gameServer.voicechannels = Vclist(40, gameServer.users);

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
    var voice_users = Math.floor(Math.random()*users.length);
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


