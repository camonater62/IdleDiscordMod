const serverPane = document.getElementById('serverpane');
const mainPane = document.getElementById('mainpane');
const channelPane = document.getElementById('channelpane');
const shopPane = document.getElementById('shoppane');
currentServer = ""
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
    //channelPane.innerHTML = "";

    // area for a all text messages
    // using another elem so the scrollbar
    // can be offset
    const elem = document.createElement('div');
    elem.classList = "vc-area";
    channelPane.appendChild(elem);

    for (const u of channel.currentUsers) {
        // container for profile and name
        console.log("AaAaaa");
        const vcElem = document.createElement('div');
        vcElem.classList = "vc-user-container";

        // user icon
        const pfp = document.createElement('img');
        pfp.classList = "vc-img vc-pic";        
        pfp.src = u.pfp;

        // user name
        const name = document.createElement('h3');
        name.innerHTML = u.name;
        name.className = "vcname"

        vcElem.append(pfp, name);
        elem.appendChild(vcElem);
        //vcElem.scrollIntoView();
    }


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
        input.onclick = () => {{shopbtn.togglebutton();document.getElementById('switch').play();}};
        input.disabled = true;
        const labelling = document.createElement("label");
        labelling.htmlFor= shopbtn.button_name;
        const bottomRow = document.createElement("h1");
        bottomRow.className = "clout-bar";
        bottomRow.style.color = "red";
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
        if (shopbtn.text == "Add Member") {outerButton.onclick = () => {server.addmember(); document.getElementById('pop').play();}};
        if (shopbtn.text == "AddMusic Bot") {outerButton.onclick = () => {server.addbot("musicbot"); document.getElementById('pop').play();}};
        if (shopbtn.text == "Add AutoMuter Bot") {outerButton.onclick = () => {server.addbot("automuterbot");document.getElementById('pop').play();}};
        const topRow = document.createElement("h1");
        topRow.innerText = shopbtn.text
        const bottomRow = document.createElement("h1");
        bottomRow.className = "clout-bar";
        bottomRow.style.color = "red";
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
    
    console.log(shopPane);
    // container for text channels
    const textChannels = document.createElement('div');
    textChannels.className = "textChannelStyle"
    textChannels.innerHTML = "TEXT CHANNELS<br />";
    
    // create a button for every text channel
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
        channelBtn.onclick = () => { switchVoiceChannel(vc); document.getElementById('discordJoinVC').play();};

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
    currentServer = server
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
addServerToDOM(bigFriendServer);
addServerToDOM(classServer);
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
let cloutgenTimer = 50;
function tick() {
    newMessageTimer--;
    cloutgenTimer--;
    if (newMessageTimer <= 0) {
        const rndIndex = Math.floor(Math.random() * smallFriendServer.users.length);
        let user = smallFriendServer.users[rndIndex];
        smallFriendServer.textchannels[0].messages.push(
            new Message(user, getText()),
        );

        if (smallFriendServer.textchannels[0].messages.length > 6) {
            smallFriendServer.textchannels[0].messages = smallFriendServer.textchannels[0].messages.slice(-60);
        }

        switchTextChannel(smallFriendServer.textchannels[0]);
        newMessageTimer = 50;
    }
    if (cloutgenTimer <= 0) {
        clout += smallFriendServer.cloutgenrate + bigFriendServer.cloutgenrate + classServer.cloutgenrate;
        cloutgenTimer = 50;
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