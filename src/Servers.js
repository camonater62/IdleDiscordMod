// This file should probably have a different name
// or Server.js should have a different name

// this is the starter/initial server
// TODO:
// - Change server icon
// - Change name?
// - Change the users to not be so hard coded
const smallFriendServer = new Server("imgs/server-icons/smallfriendserver.png", "Me and my buds :)");
smallFriendServer.users = [
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
    new User(),
];
// empty text is just here for testing, we can delete later
smallFriendServer.textchannels = [
    new TextChannel("# general"),
    new TextChannel("# empty text"),
];
smallFriendServer.voicechannels = [
    new VoiceChannel("voice channel"),
];

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
classServer.users = [
    new User(),
    new User()
];