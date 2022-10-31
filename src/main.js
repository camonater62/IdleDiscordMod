const serverPane = document.getElementById('serverpane');
const mainPane = document.getElementById('mainpane');
const channelPane = document.getElementById('channelpane');

// this is the starter/initial server
// TODO:
// - Change server icon
// - Change name?
// - Change the users to not be so hard coded
const smallFriendServer = new Server("imgs/server-icons/choco.jpg", "Me and my buds :)");
smallFriendServer.users = [
    new User("imgs/profile-pics/ame.png", "Me!"),
    new User("imgs/profile-pics/anime.png", "Friend #1")
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
const emptyServer = new Server("imgs/profile-pics/anime.png", "Empty Server");
emptyServer.textchannels = [
    new TextChannel("This is a different text channel"),
]
emptyServer.voicechannels = [
    new VoiceChannel("This is a different voice channel"),
]

// another testing server
const randomServer = new Server("imgs/profile-pics/anime.png", "Random Server");
randomServer.textchannels = [
    new TextChannel("This is a different text channel"),
]
randomServer.voicechannels = [
    new VoiceChannel("This is another different voice channel"),
]
randomServer.users = [
    new User("imgs/profile-pics/ame.png", "eeee!"),
    new User("imgs/profile-pics/anime.png", "Friend #1")
];

// update the text area dom to represent this text channel
function switchTextChannel(channel) {
    mainPane.innerHTML = "";

    // area for a all text messages
    // using another elem so the scrollbar
    // can be offset
    const elem = document.createElement('div');
    elem.classList = "text-area";
    mainPane.appendChild(elem);

    for (const msg of channel.messages) {
        // container for whole message
        const msgElem = document.createElement('div');
        msgElem.classList = "message-container";

        // user icon
        const pfp = document.createElement('img');
        pfp.classList = "profile-icon profile-pic";
        pfp.src = msg.user.pfp;

        // user name
        const name = document.createElement('h3');
        name.innerHTML = msg.user.name;
        name.className = "username"

        // text content (emoji)
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

// TODO
function switchVoiceChannel(channel) {
}


// this function changes the dom elements to be a new server
function switchServer(server) {
    // clear all the previous channels
    channelPane.innerHTML = "";
    
    // container for text channels
    const textChannels = document.createElement('div');
    textChannels.className = "textChannelStyle"
    textChannels.innerHTML = "TEXT CHANNELS<br />";
    

    // craete a button for every text channel
    for (const tc of server.textchannels) {
        const channelBtn = document.createElement('button');
        const topText = document.getElementById('topText');
        topText.className = "topTextStyle";
        channelBtn.className = "s1channelButtons";
        channelBtn.innerHTML = tc.name;
        channelBtn.onclick = () => { switchTextChannel(tc); topText.textContent = tc.name; };
        textChannels.appendChild(channelBtn);
        textChannels.appendChild(document.createElement('br'));
    }
    channelPane.appendChild(textChannels);

    // container for voice channels
    const voiceChannels = document.createElement('div');
    voiceChannels.className = "textChannelStyle";
    voiceChannels.innerHTML = "VOICE CHANNELS<br />";

    // the speaker icon for each vc
    const vcIcon = document.createElement('img');
    vcIcon.src = 'imgs/vc-icon.png'
    vcIcon.classList = 'vc-icon';

    // create a button for every voice channel and add it
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

    // switch to the primary text channel for the default view
    switchTextChannel(server.textchannels[0]);
}

// this function creates an icon on the left side and binds the 
// onclick to switch the main dom elements to represent this server
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
addServerToDOM(randomServer);
switchServer(smallFriendServer);

// finds the latest bad message and removes it
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
// - move to another file??
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