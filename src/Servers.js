// This file should probably have a different name
// or Server.js should have a different name

// this is the starter/initial server
// TODO:
// - Change server icon
// - Change name?
// - Change the users to not be so hard coded
const smallFriendServer = new Server("imgs/server-icons/smallfriendserver.png", "Me and my buds :)");
smallFriendServer.users = Userlist(7); //aff 7 users
// empty text is just here for testing, we can delete later
smallFriendServer.textchannels = [
    new TextChannel("# general"),
    new TextChannel("# empty text"),
];

console.log(smallFriendServer.users.length);
smallFriendServer.voicechannels = Vclist(2,smallFriendServer.users);

//Voiceuser(smallFriendServer.users);

// testing server, please keep for now
const bigFriendServer = new Server("imgs/server-icons/bigfriendserver.png", "2 buds 2 furious");
bigFriendServer.textchannels = [
    new TextChannel("This is a different text channel"),
]
bigFriendServer.voicechannels = [
    new VoiceChannel("This is a different voice channel"),
]

// another testing server
const classServer = new Server("imgs/server-icons/classserver.png", "Class Server");
classServer.textchannels = [
    new TextChannel("This is a different text channel"),
]
classServer.voicechannels = [
    new VoiceChannel("This is another different voice channel"),
]
classServer.users = Userlist(2);

function Userlist(num){
    names=[];
    for(var i =0; i<num; i++){
        names.push(new User());
    }
    return names;
}

function Voiceuser(users){
    names=[];
    var voice_users = Math.floor(Math.random()*users.length);
    for(var i =0; i<voice_users; i++){
        names.push(users[i].name);
        console.log(users[i].name);
    }
    return names;
}

function Vclist(num, users){
    vc=[];
    for(var i =0; i<num; i++){
        vc.push(new VoiceChannel("this is a new voice channel",Voiceuser(users)));
    }
    return vc;
}


