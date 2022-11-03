// This file should probably have a different name
// or Server.js should have a different name

// this is the starter/initial server

let add_musicbot_shopbtn = new ShopButton("Add Music Bot", "addmusicbotbtn", "addmusicbotswitch", 80, "add_music_cost", false, "red", 5, false);
let add_automuterbot_shopbtn = new ShopButton("Add AutoMuter Bot", "addautomuterbtn", "addautomuterswitch", 160, "add_automuter_cost", false, "red", 10, false);
let add_autodeletebot_shopbtn = new ShopButton("Add AutoDelete Bot", "addautodeletebtn", "addautodeleteswitch", 320, "add_autodelete_cost", false, "red", 20, false);
let add_autodisconnectbot_shopbtn = new ShopButton("Add AutoDisconnect Bot", "addautodisconnectbtn", "addautodisconnectswitch", 640, "add_autodisconnect_cost", false, "red", 40, false);
let add_autokickbot_shopbtn = new ShopButton("Add AutoKick Bot", "addautokickbtn", "addautokickswitch", 1280, "add_autokick_cost", false, "red", 80, false);
let add_autobanbot_shopbtn = new ShopButton("Add AutoBan Bot", "addautobanbtn", "addautobanswitch", 2560, "add_autoban_cost", false, "red", 160, false);
let add_autoateveryonebot_shopbtn = new ShopButton("Add Auto@Everyone Bot", "addauto@Everyonebtn", "addauto@Everyoneswitch", 5120, "add_auto@Everyone_cost", false, "red", 320, false);
let add_autoDMerbot_shopbtn = new ShopButton("Add AutoDMer Bot", "addautoDMerbtn", "addautoDMerswitch", 10240, "add_autoDMer_cost", false, "red", 640, false);

const smallFriendServer = new Server("imgs/server-icons/smallfriendserver.png", "Me and my buds :)", 10, [], []);
smallFriendServer.users = Userlist(7); //add 7 users
smallFriendServer.textchannels = [
    new TextChannel("# general"),
    new TextChannel("# empty text"),
];
smallFriendServer.voicechannels = Vclist(1,smallFriendServer.users);//add 2 voice channels with random members

const bigFriendServer = new Server("imgs/server-icons/bigfriendserver.png", "2 buds 2 furious", 10, [], [add_musicbot_shopbtn]);
bigFriendServer.users = Userlist(10);
bigFriendServer.textchannels = Tclist(2);
bigFriendServer.voicechannels = Vclist(1,bigFriendServer.users);



const classServer = new Server("imgs/server-icons/classserver.png", "Class Server", 20, [], [add_musicbot_shopbtn, add_automuterbot_shopbtn, add_autodeletebot_shopbtn]);
classServer.users = Userlist(50);
classServer.textchannels = Tclist(3);
classServer.voicechannels = Vclist(3, classServer.users);

const clubServer = new Server("imgs/server-icons/clubserver.png", "Club Server", 40, [], [add_musicbot_shopbtn, add_automuterbot_shopbtn, add_autodeletebot_shopbtn, add_autodisconnectbot_shopbtn, add_autokickbot_shopbtn]);
clubServer.users = Userlist(250);
clubServer.textchannels = Tclist(5);
clubServer.voicechannels = Vclist(5, clubServer.users);

const streamerServer = new Server("imgs/server-icons/streamerserver.png", "Streamer Server", 80, [], [add_musicbot_shopbtn, add_automuterbot_shopbtn, add_autodeletebot_shopbtn, add_autodisconnectbot_shopbtn, add_autokickbot_shopbtn, add_autobanbot_shopbtn]);
streamerServer.users = Userlist(500);
streamerServer.textchannels = Tclist(10);
streamerServer.voicechannels = Vclist(5, streamerServer.users);

const subredditServer = new Server("imgs/server-icons/subredditserver.png", "Subreddit Server", 160, [], [add_musicbot_shopbtn, add_automuterbot_shopbtn, add_autodeletebot_shopbtn, add_autodisconnectbot_shopbtn, add_autokickbot_shopbtn, add_autobanbot_shopbtn, add_autoateveryonebot_shopbtn]);
subredditServer.users = Userlist(750);
subredditServer.textchannels = Tclist(10);
subredditServer.voicechannels = Vclist(5, subredditServer.users);

const gameServer = new Server("imgs/server-icons/gameserver.png", "Game Server", 320, [], [add_musicbot_shopbtn, add_automuterbot_shopbtn, add_autodeletebot_shopbtn, add_autodisconnectbot_shopbtn, add_autokickbot_shopbtn, add_autobanbot_shopbtn, add_autoateveryonebot_shopbtn, add_autoDMerbot_shopbtn]);
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


