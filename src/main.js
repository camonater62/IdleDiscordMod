function incrementclout()
{
    let clout = parseInt(document.getElementById('btn').clout, 10);
    clout = isNaN(clout) ? 0 : clout;
    clout += parseInt(slider.value);
    console.log(clout);
    document.getElementById('btn').clout = clout;
    document.getElementById("variable").innerHTML = clout;
}

function sliderupdate()
{
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    
    slider.oninput = function() {
        output.innerHTML = this.value;
    }
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
userMsgElem.textContent = sampleMessage.text;

sampleDiv.append(serverIconElem, userIconElem, userMsgElem);

document.body.appendChild(sampleDiv);