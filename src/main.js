const serverPane = document.getElementById('serverpane');
const mainPane = document.getElementById('mainpane');
const channelPane = document.getElementById('channelpane');
const shopPane = document.getElementById('shoppane');

let currentServer;
let currentTextChannel;
let currentVoiceChannel; // do we need?

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

    document.getElementById('topText').textContent = channel.name;

    currentTextChannel = channel;
}

function switchVoiceChannel(channel) {
    //channelPane.innerHTML = "";

    // area for a all text messages
    // using another elem so the scrollbar
    // can be offset
    console.log(channel.opened);
    if (channel.opened == false) {
        const elem = document.createElement('div');
        elem.classList = "vc-area";
        channelPane.appendChild(elem);
        console.log(channel.currentUsers);
        for (const u of channel.currentUsers) {
            // container for profile and name
            const vcElem = document.createElement('div');
            const pfp = document.createElement('img');
            if (Math.random() >= 0.5) {
                vcElem.classList = "vc-user-container-bad";
                pfp.classList = "vc-img-bad vc-pic";       
                pfp.src = u.pfp;
            } else {
                vcElem.classList = "vc-user-container";
                pfp.classList = "vc-img vc-pic";       
                pfp.src = u.pfp;
            }

            // user name
            const name = document.createElement('h3');
            name.innerHTML = u.name;
            name.className = "vcname";

            vcElem.append(pfp, name);
            elem.appendChild(vcElem);
            vcElem.scrollIntoView();
        }
        channel.opened = true;
    } else {
        // might mess up other servers (probably)
        const elements = document.getElementsByClassName('vc-area');
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        channel.opened = false;
    }

    currentVoiceChannel = channel;
}

function deletebadvoice() {
    const elements = document.getElementsByClassName('vc-user-container-bad');
    elements[0].parentNode.removeChild(elements[0]);
    clout += 20;
}

// this function changes the dom elements to be a new server
function switchServer(server) {
    // clear all the previous channels
    channelPane.innerHTML = "";

    // Save visible elements.
    for (const shopbtn of server.toggleshopbuttons) {
        if (shopbtn.button_name == "disconnectswitch" && shopbtn.is_bought) {
            server.toggleshopbuttons[1].is_visible = true
        } else if (shopbtn.button_name == "kickswitch" && shopbtn.is_bought) {
            server.toggleshopbuttons[2].is_visible = true
        }
    }
    // Generate shop panel.
    shopPane.innerHTML = "<h1>Shop</h1>";
    for (const shopbtn of server.toggleshopbuttons) {
        const outerDiv = document.createElement("div");
        const shopBox = document.createElement("div");
        shopBox.className = "shopbox";
        shopBox.id = shopbtn.div_name;
        const topRow = document.createElement("h1");
        topRow.innerHTML = shopbtn.text;
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = shopbtn.button_name;
        input.onclick = () => {shopbtn.togglebutton();};
        input.disabled = true;
        const labelling = document.createElement("label");
        labelling.htmlFor= shopbtn.button_name;
        const bottomRow = document.createElement("h1");
        bottomRow.className = "clout-bar";
        bottomRow.style.color = "#FF3880";
        const button_cost = document.createElement("span");
        button_cost.innerText = shopbtn.cost * -1 + " ";
        button_cost.id = shopbtn.cost_name;
        const button_img = document.createElement("img");
        button_img.src = "./imgs/Clout Glasses-28x10.png";
        if (shopbtn.div_name == "disconnectshop") {shopBox.style.visibility = "visible"}
        if (shopbtn.is_bought || shopbtn.is_visible) {shopBox.style.visibility = "visible"}
        shopPane.appendChild(outerDiv);
        outerDiv.appendChild(shopBox);
        shopBox.appendChild(topRow);
        topRow.appendChild(input);
        topRow.appendChild(labelling);
        shopBox.appendChild(bottomRow);
        bottomRow.appendChild(button_cost);
        bottomRow.appendChild(button_img);
        if (shopbtn.cloutgen != 0) {
            const button_genrate = document.createElement("h1");
            button_genrate.className = "clout-bar";
            button_genrate.innerHTML = "+" + shopbtn.cloutgen + " <img src='./imgs/Clout Glasses-28x10.png' /> / click";
            shopBox.appendChild(button_genrate);
        }

        shopbtn.updatebutton();
    }
    // Create Header to separate shop elements.
    const header = document.createElement('hr');
    // TODO: Deprecated html.color attribute here but header.style.color doesn't
    // work either?
    header.color = "#41444b";
    shopPane.appendChild(header);

    // Create add buttons
    for (const shopbtn of server.addshopbuttons) {
        const outerButton = document.createElement('button');
        outerButton.className = "button"
        outerButton.id = shopbtn.div_name;
        if (shopbtn.text == "Add Member") {outerButton.onclick = () => server.addmember();};
        if (shopbtn.text == "AddMusic Bot") {outerButton.onclick = () => server.addbot("musicbot");};
        if (shopbtn.text == "Add AutoMuter Bot") {outerButton.onclick = () => server.addbot("automuterbot");};
        const topRow = document.createElement("h1");
        topRow.innerText = shopbtn.text
        const bottomRow = document.createElement("h1");
        bottomRow.className = "clout-bar";
        bottomRow.style.color = "#FF3880";
        const button_cost = document.createElement("span");
        button_cost.innerText = shopbtn.cost * -1 + " ";
        button_cost.id = shopbtn.cost_name;
        const button_img = document.createElement("img");
        button_img.src = "./imgs/Clout Glasses-28x10.png";
        shopPane.appendChild(outerButton);
        outerButton.appendChild(topRow);
        outerButton.appendChild(bottomRow);
        bottomRow.append(button_cost);
        bottomRow.append(button_img);
        if (shopbtn.cloutgen != 0) {
            const button_genrate = document.createElement("h1");
            button_genrate.className = "clout-bar";
            button_genrate.innerHTML = "+" + shopbtn.cloutgen + " <img src='./imgs/Clout Glasses-28x10.png' /> / s";
            outerButton.appendChild(button_genrate);
        }

        shopbtn.updatebutton();
    }
    
    // console.log(shopPane);
    // container for text channels
    const textChannels = document.createElement('div');
    textChannels.className = "textChannelStyle"
    textChannels.innerHTML = "TEXT CHANNELS<br />";
    
    // create a button for every text channel
    const topText = document.getElementById('topText');
    topText.className = "topTextStyle";
    for (const tc of server.textchannels) {
        const channelBtn = document.createElement('button');
       
        channelBtn.className = "s1channelButtons";
        channelBtn.innerHTML = tc.name;
        channelBtn.onclick = () => { switchTextChannel(tc); };
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
    //switchVoiceChannel(server.voicechannels[0]);
    // create a button for every voice channel and add it
    for (const vc of server.voicechannels) {
        const channelBtn = document.createElement('div');
        channelBtn.className = "vcChannelStyles vc-container";
        channelBtn.onclick = () => { switchVoiceChannel(vc); };
        //switchVoiceChannel(vc);
    // create a button for every voice channel an
        const channelName = document.createElement('div');
        channelName.textContent =server.voicechannels[0].name;
        channelName.classList = "vc-name";

        channelBtn.appendChild(vcIcon);
        channelBtn.appendChild(channelName);

        voiceChannels.appendChild(channelBtn);
    //switchVoiceChannel(vc);
        //switchVoiceChannel(server.voicehannels[0]);
        // voiceChannels.appendChild(document.createElement('br'));
    }
    channelPane.appendChild(voiceChannels);
    switchVoiceChannel(server.voicechannels[0]);
    // switch to the primary text channel for the default view
    currentServer = server;
    switchTextChannel(server.textchannels[0]);
    //switchVoiceChannel(server.voicechannels[0]);
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

for (const server of allServers) {
    addServerToDOM(server);
}
switchServer(allServers[0]);


// finds the latest bad message and removes it
function deleteMessage() {
    for (let i = currentTextChannel.messages.length - 1; i >= 0; i--) {
        if (currentTextChannel.messages[i].text.good == false) {
            currentTextChannel.messages =
                currentTextChannel.messages.slice(0, i).concat(
                currentTextChannel.messages.slice(i + 1));
            addclout('deletebtn', 1);
            break;
        }
    }

    switchTextChannel(currentTextChannel);
}



let newMessageTimer = 50;
let cloutgenTimer = 50;

function tick() {
    newMessageTimer--;
    cloutgenTimer--;
    vcTimer--;
    if (newMessageTimer <= 0) {
        if (currentServer.users.length > 0) {
            const rndIndex = Math.floor(Math.random() * currentServer.users.length);
            let user = currentServer.users[rndIndex];
            currentTextChannel.messages.push(
                new Message(user, getText()),
            );
    
            if (currentTextChannel.messages.length > 40) {
                currentTextChannel.messages = currentTextChannel.messages.slice(-40);
            }
    
            switchTextChannel(currentTextChannel);
        }
        
        newMessageTimer = 50;
    }
 
    const userCountElem = document.getElementById('member');
    userCountElem.innerHTML = `<b>${currentServer.users.length}</b>`
    const cloutElem = document.getElementById('clout');
    cloutElem.innerHTML = `<b>${clout}</b>`;

    for (const shopbtn of currentServer.toggleshopbuttons) {
        if (!shopbtn.is_bought) {shopbtn.updatebutton();};
    }
    for (const shopbtn of currentServer.addshopbuttons) {
        shopbtn.updatebutton();
    }

    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);


let vcTimer = 50; 
function vcupdate(){
    if (vcTimer <= 0 && smallFriendServer.voicechannels[0].currentUsers.length <=smallFriendServer.users.length) {
        const rndIndex = Math.floor(Math.random() * smallFriendServer.users.length);
        let user = smallFriendServer.users[rndIndex];
        smallFriendServer.voicechannels[0].currentUsers.shift();
        smallFriendServer.voicechannels[0].currentUsers.push(user);

   
        switchVoiceChannel(smallFriendServer.voicechannels[0]);
        vcTimer = 100;
    }
    requestAnimationFrame(vcupdate);
}
requestAnimationFrame(vcupdate);