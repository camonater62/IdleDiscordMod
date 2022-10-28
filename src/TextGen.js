// bad emoji - poop, gun, boom, swear, biting lip, 
// angry, goblin, devil, skull, pouting cat, rotating light,
// middle finger, cross mark, anger, underage, pirate flag
const BAD_EMOJI = [ '1f4a9', '1f52b', '1f4a5', '1f92c', '1fae6',
    '1f620', '1f47a', '1f47f', '1f480', '1f63e', '1f6a8',
    '1f595', '274c', '1f4a2', '1f51e' ];

// good emoji - smile, crying laughing, rainbow, frog, coffee, 
// pizza, thumbs up, heart, 100, peace, music
const GOOD_EMOJI = [ '1f60a', '1f602', '1f308', '1f438', '2615', 
    '1f355', '1f44d', '2764', '1f4af', '262e', '1f3b6' ];

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