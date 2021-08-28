"use strict" //ECMAScript Version 5 and above => Feature: strictly typed js

var button = document.querySelectorAll(".btn");
var bar = document.querySelectorAll(".bar");

button[0].addEventListener("click", playAudio);
button[1].addEventListener("click", pauseAudio);
var audio = new Audio("sounds/audio1.mp3");//check out how to implement audio of any format in javascript

function playAudio() {
    window.focus();
    try {
        audio.play();
    } catch (error) {
        console.log("This file is not supported: " + error);
    }
}

function pauseAudio() {
    audio.pause();
}