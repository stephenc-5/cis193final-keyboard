/*
CIS193 - Final Project - Keyboard

Author:         Stephen Chang
Date:           6/8/2021

*/

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

/* Loop through each key and add event listner */
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});

document.addEventListener('keydown', e => {
    if (e.repeat) return; /* prevents repeat of key when key is held on */
    const keyPress = e.key;
    const whiteKeyIndex = WHITE_KEYS.indexOf(keyPress);
    const blackKeyIndex = BLACK_KEYS.indexOf(keyPress);

    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex]);
    }
    if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex]);
    }
})


/* FUNCTIONS */

function playNote(key) {
    const soundAudio = document.getElementById(key.dataset.note);
    soundAudio.currentTime = 0;
    soundAudio.play();
    key.classList.add('active');
    soundAudio.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}