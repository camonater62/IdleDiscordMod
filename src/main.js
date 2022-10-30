const serverPane = document.getElementById('serverpane');
const mainPane = document.getElementById('mainpane');
const channelPane = document.getElementById('channelpane');

const smallFriendServer = new Server("imgs/server-icons/choco.jpg", "Me and my buds :)");
smallFriendServer.users = [
    new User("imgs/profile-pics/ame.png", "Me!"),
    new User("imgs/profile-pics/anime.png", "Friend #1")
];
smallFriendServer.textchannels = [
    new TextChannel("# general"),
    new TextChannel("# empty text"),
];
smallFriendServer.voicechannels = [
    new VoiceChannel("voice channel"),
];
smallFriendServer.textchannels[0].messages = [
    new Message(smallFriendServer.users[0], getText()),
    new Message(smallFriendServer.users[1], getText()),
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

    const elem = document.createElement('div');
    elem.classList = "text-area";
    mainPane.appendChild(elem);
    for (const msg of channel.messages) {
        const msgElem = document.createElement('div');
        msgElem.classList = "message-container";
        const pfp = document.createElement('img');
        pfp.classList = "profile-icon profile-pic";
        pfp.src = msg.user.pfp;
        const name = document.createElement('h3');
        name.innerHTML = msg.user.name;
        name.className = "username"
        const text = document.createElement('p');
        for (const src of msg.text.emojis) {
            const emoji = document.createElement('img');
            emoji.src = `imgs/twemoji/${src}.svg`;
            emoji.classList = "emoji text-content";
            text.appendChild(emoji);
        }

        msgElem.append(pfp, name, text);
        elem.appendChild(msgElem);
        msgElem.scrollIntoView();
    }
}

function switchVoiceChannel(channel) {
    // TODO
}


function switchServer(server) {
    channelPane.innerHTML = "";
    
    const textChannels = document.createElement('div');
    textChannels.className = "textChannelStyle"
    textChannels.innerHTML = "TEXT CHANNELS<br />";
    
    const vcIcon = document.createElement('img');
    vcIcon.src = 'imgs/vc-icon.png'
    vcIcon.classList = 'vc-icon';

    for (const tc of server.textchannels) {
        const channelBtn = document.createElement('button');
        channelBtn.className = "s1channelButtons";
        channelBtn.innerHTML = tc.name;
        channelBtn.onclick = () => { switchTextChannel(tc); };
        textChannels.appendChild(channelBtn);
        textChannels.appendChild(document.createElement('br'));
    }
    channelPane.appendChild(textChannels);

    const voiceChannels = document.createElement('div');
    voiceChannels.className = "textChannelStyle";
    voiceChannels.innerHTML = "VOICE CHANNELS<br />";

    for (const vc of server.voicechannels) {
        const channelBtn = document.createElement('button');
        channelBtn.className = "vcChannelStyles vc-container";
        channelBtn.onclick = () => { switchVoiceChannel(vc); };

        const channelName = document.createElement('div');
        channelName.textContent = vc.name;
        channelName.classList = "vc-name";

        channelBtn.appendChild(vcIcon);
        channelBtn.appendChild(channelName);

        voiceChannels.appendChild(channelBtn);
        voiceChannels.appendChild(document.createElement('br'));
    }
    channelPane.appendChild(voiceChannels);

    switchTextChannel(server.textchannels[0]);
    switchVoiceChannel(server.voicechannels[0]);
}

function addServerToDOM(server) {
    const serverIcon = document.createElement('img');
    serverIcon.classList = "server-icon";
    const serverName = document.createElement('b');
    serverName.classList = "hidden";
    serverName.innerHTML = server.name;
    // serverName.style = "position: absolute; height: 50px; width: 150px; margin-top: 25px";
    
    serverIcon.src = server.picture;
    // serverIcon.title = server.name;
    serverIcon.onmouseenter = () => { serverName.classList = "server-name" };
    serverIcon.onmouseleave = () => { serverName.classList = "hidden" };
    serverIcon.onclick = () => { switchServer(server); };
    serverPane.appendChild(serverIcon);
    serverPane.appendChild(serverName);
}

addServerToDOM(smallFriendServer);
addServerToDOM(emptyServer);
switchServer(smallFriendServer);

function deleteMessage() {
    for (let i = smallFriendServer.textchannels[0].messages.length - 1; i >= 0; i--) {
        if (smallFriendServer.textchannels[0].messages[i].text.good == false) {
            smallFriendServer.textchannels[0].messages =
                smallFriendServer.textchannels[0].messages.slice(0, i).concat(
                smallFriendServer.textchannels[0].messages.slice(i + 1));
            addclout('deletebtn', 1);
            break;
        }
    }

    switchTextChannel(smallFriendServer.textchannels[0]);
}

// TODO:
// - not hard code
// - have it based on actual time elapsed
let newMessageTimer = 50;
function tick() {
    newMessageTimer--;
    if (newMessageTimer <= 0) {
        let user = (Math.random() < 0.5) ? smallFriendServer.users[0] : smallFriendServer.users[1];
        smallFriendServer.textchannels[0].messages.push(
            new Message(user, getText()),
        );

        if (smallFriendServer.textchannels[0].messages.length > 6) {
            smallFriendServer.textchannels[0].messages = smallFriendServer.textchannels[0].messages.slice(-60);
        }

        switchTextChannel(smallFriendServer.textchannels[0]);
        newMessageTimer = 50;
    }
    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);