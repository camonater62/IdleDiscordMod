function incrementclout()
{
    let clout = parseInt(document.getElementById('btn').clout, 10);
    clout = isNaN(clout) ? 0 : clout;
    clout += 1;
    console.log(clout);
    document.getElementById('btn').clout = clout;
    document.getElementById("variable").innerHTML = clout;
}

const sampleServer = new Server("imgs/server-icons/choco.jpg", "Sample Server");
const sampleUser = new User("imgs/profile-pics/ame.png", "User1234");
const sampleMessage = new Message(sampleUser, "Yo ye ya squad!");

const sampleDiv = document.createElement('div');
const serverIconElem = document.createElement('img');
serverIconElem.src = sampleServer.picture;
const userIconElem = document.createElement('img');
userIconElem.src = sampleMessage.user.pfp;
const userMsgElem = document.createElement('p');
userMsgElem.textContent = sampleMessage.user.name + ": " + sampleMessage.text;
sampleDiv.append(userIconElem, userMsgElem)

const serverPane = document.getElementById('serverpane');
serverPane.appendChild(serverIconElem);

const mainPane = document.getElementById('mainpane');
mainPane.appendChild(sampleDiv);