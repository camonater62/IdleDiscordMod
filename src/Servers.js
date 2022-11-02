// This file should probably have a different name
// or Server.js should have a different name

// this is the starter/initial server
// TODO:
// - Change server icon
// - Change name?
// - Change the users to not be so hard coded
const smallFriendServer = new Server("imgs/server-icons/smallfriendserver.png", "Me and my buds :)");
smallFriendServer.users = Userlist(7); //add 7 users
// empty text is just here for testing, we can delete later
smallFriendServer.textchannels = [
    new TextChannel("# general"),
    new TextChannel("# empty text"),
];

console.log(smallFriendServer.users.length); //testing code, plz save it for now
smallFriendServer.voicechannels = Vclist(2,smallFriendServer.users);//add 2 voice channels with random members
for(var i = 0; i<smallFriendServer.voicechannels[0].currentUsers.length; i++){//testing code, prints out vc members
    console.log(smallFriendServer.voicechannels[0].currentUsers[i].name);
}
//Voiceuser(smallFriendServer.users);

// testing server, please keep for now
const bigFriendServer = new Server("imgs/server-icons/bigfriendserver.png", "2 buds 2 furious");
bigFriendServer.users = Userlist(15);
bigFriendServer.textchannels = [
    new TextChannel("This is a different text channel"),
]
bigFriendServer.voicechannels = bigFriendServer.voicechannels = Vclist(1,bigFriendServer.users);

// another testing server
const classServer = new Server("imgs/server-icons/classserver.png", "Class Server");
classServer.textchannels = [
    new TextChannel("This is a different text channel"),
]
classServer.voicechannels = [
    new VoiceChannel("This is another different voice channel"),
]
classServer.users = Userlist(2);

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

function Vclist(num, users){     //num = voice channel numbers
                                 //add num voice channels to server
    vc=[];
    for(var i =0; i<num; i++){
        vc.push(new VoiceChannel("this is a new voice channel",Voiceuser(users)));
    }
    return vc;
}


