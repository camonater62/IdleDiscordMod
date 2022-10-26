function incrementclout()
{
    let clout = parseInt(document.getElementById('btn').clout, 10);
    clout = isNaN(clout) ? 0 : clout;
    clout += 1;
    console.log(clout);
    document.getElementById('btn').clout = clout;
    document.getElementById("variable").innerHTML = clout;
}

const serverPane = document.getElementById('serverpane');
const mainPane = document.getElementById('mainpane');
const channelPane = document.getElementById('channelpane');

const smallFriendServer = new Server("imgs/server-icons/choco.jpg", "Me and my buds :)");
smallFriendServer.users = [
    new User("imgs/profile-pics/ame.png", "Me!"),
    new User("imgs/profile-pics/anime.png", "Friend #1")
];
smallFriendServer.textchannels = [
    new TextChannel("general"),
    new TextChannel("empty text"),
];
smallFriendServer.voicechannels = [
    new VoiceChannel("voice channel"),
];
smallFriendServer.textchannels[0].messages = [
    new Message(smallFriendServer.users[0], "Hello my 1 and only friend!"),
    new Message(smallFriendServer.users[1], `Hi "${smallFriendServer.users[0].name}"!`),
];

const emptyServer = new Server("imgs/profile-pics/anime.png", "Empty Server");
emptyServer.textchannels = [
    new TextChannel("This is a different text channel"),
]
emptyServer.voicechannels = [
    new VoiceChannel("This is a different voice channel"),
]

function switchTextChannel(channel) {
    mainPane.innerHTML = "";

    for (const msg of channel.messages) {
        const msgElem = document.createElement('div');
        const pfp = document.createElement('img');
        pfp.src = msg.user.pfp;
        const name = document.createElement('h3');
        name.innerHTML = msg.user.name;
        const text = document.createElement('p');
        text.innerHTML = msg.text;

        msgElem.append(pfp, name, text);
        mainPane.appendChild(msgElem);
    }
}

function switchVoiceChannel(channel) {
    // TODO
}

function switchServer(server) {
    channelPane.innerHTML = "";
    
    const textChannels = document.createElement('div');
    textChannels.innerHTML = "Text Channels<br />";
    for (const tc of server.textchannels) {
        const channelBtn = document.createElement('button');
        channelBtn.innerHTML = tc.name;
        channelBtn.onclick = () => { switchTextChannel(tc); };
        textChannels.appendChild(channelBtn);
        textChannels.appendChild(document.createElement('br'));
    }
    channelPane.appendChild(textChannels);

    const voiceChannels = document.createElement('div');
    voiceChannels.innerHTML = "Voice Channels<br />";
    for (const vc of server.voicechannels) {
        const channelBtn = document.createElement('button');
        channelBtn.innerHTML = vc.name;
        channelBtn.onclick = () => { switchVoiceChannel(vc); };
        voiceChannels.appendChild(channelBtn);
        voiceChannels.appendChild(document.createElement('br'));
    }
    channelPane.appendChild(voiceChannels);

    switchTextChannel(server.textchannels[0]);
    switchVoiceChannel(server.voicechannels[0]);
}

function addServerToDOM(server) {
    const serverIcon = document.createElement('img');
    const serverName = document.createElement('b');
    serverName.classList = "hidden";
    serverName.innerHTML = server.name;
    serverName.style = "position: absolute; height: 50px; width: 150px; margin-top: 25px";
    
    serverIcon.src = server.picture;
    // serverIcon.title = server.name;
    serverIcon.onmouseenter = () => { serverName.classList = "" };
    serverIcon.onmouseleave = () => { serverName.classList = "hidden" };
    serverIcon.onclick = () => { switchServer(server); };
    serverPane.appendChild(serverIcon);
    serverPane.appendChild(serverName);
}

addServerToDOM(smallFriendServer);
addServerToDOM(emptyServer);
switchServer(smallFriendServer);