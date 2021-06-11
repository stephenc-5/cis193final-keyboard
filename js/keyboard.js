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
const instruments = document.querySelectorAll('.instrument');

/* Loop through each key and add event listner */
keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});

/* Loop through each instrument key and add event listener */
instruments.forEach(instrument => {
    instrument.addEventListener('click', () => {
        pickInstrument(instrument.value);
        changeBtnColor(instrument);
    })
})

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

function pickInstrument(e) {
    var audioHTML = "";
    var folderName = e;

    if (e === "piano") {
        audioHTML += "<audio preload='auto' id='C' src='sound/" + folderName + "/c4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Db' src='sound/" + folderName + "/c-4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='D' src='sound/" + folderName + "/d4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Eb' src='sound/" + folderName + "/d-4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='E' src='sound/" + folderName + "/e4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='F' src='sound/" + folderName + "/f4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Gb' src='sound/" + folderName + "/f-4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='G' src='sound/" + folderName + "/g4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Ab' src='sound/" + folderName + "/g-4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='A' src='sound/" + folderName + "/a5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Bb' src='sound/" + folderName + "/a-5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='B' src='sound/" + folderName + "/b5.mp3'></audio>";
    } else if (e === "xylophone" || e === "flute") {
        audioHTML += "<audio preload='auto' id='C' src='sound/" + folderName + "/C5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Db' src='sound/" + folderName + "/Db5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='D' src='sound/" + folderName + "/D5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Eb' src='sound/" + folderName + "/Eb5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='E' src='sound/" + folderName + "/E5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='F' src='sound/" + folderName + "/F5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Gb' src='sound/" + folderName + "/Gb5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='G' src='sound/" + folderName + "/G5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Ab' src='sound/" + folderName + "/Ab5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='A' src='sound/" + folderName + "/A5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Bb' src='sound/" + folderName + "/Bb5.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='B' src='sound/" + folderName + "/B5.mp3'></audio>";
    } else if (e === "trombone") {
        audioHTML += "<audio preload='auto' id='C' src='sound/" + folderName + "/C4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Db' src='sound/" + folderName + "/Db4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='D' src='sound/" + folderName + "/D4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Eb' src='sound/" + folderName + "/Eb4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='E' src='sound/" + folderName + "/E4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='F' src='sound/" + folderName + "/F4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Gb' src='sound/" + folderName + "/Gb4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='G' src='sound/" + folderName + "/G4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Ab' src='sound/" + folderName + "/Ab4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='A' src='sound/" + folderName + "/A4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='Bb' src='sound/" + folderName + "/Bb4.mp3'></audio>";
        audioHTML += "<audio preload='auto' id='B' src='sound/" + folderName + "/B4.mp3'></audio>";
    }
    document.getElementById("audiohtml").innerHTML = audioHTML;
}

function changeBtnColor(e) {
    resetBtnColor();
    var btn = document.getElementById(e.id);
    btn.style.backgroundColor = "#B1ADAC";
}

function resetBtnColor() {
    for (var i = 1; i <= 4; i++) {
        var btn = document.getElementById("btn" + i);
        btn.style.backgroundColor = "#F9FBFA";
    }
}