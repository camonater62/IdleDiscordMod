// bad emoji - poop, gun, bomb, swear, biting lip, 
const BAD_EMOJI = [ '1f4a9', '1f52b', '1f4a3', '1f92c', '1fae6' ];

// good emoji - smile, crying laughing, rainbow, frog, coffee
const GOOD_EMOJI = [ '1f60a', '1f602', '1f308', '1f438', '2615' ];

class Text {
    constructor(emojis, good) {
        this.emojis = emojis;
        this.good = good;
    }
}

function getText() {
    let good = true;
    let source = GOOD_EMOJI;
    let emojis = [];
    let amount = Math.floor(Math.random() * 10) + 5;

    if (Math.random() < 0.1) {
        good = false;
        source = BAD_EMOJI;
    } 

    for (let i = 0; i < amount; i++) {
        let index = Math.random() * source.length;
        index = Math.floor(index);
        emojis.push(source[index]);
    }

    return new Text(emojis, good);
}