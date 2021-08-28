"use strict" //ECMAScript Version 5 and above => Feature: strictly typed js

var button = document.querySelectorAll(".btn");
var bar = document.querySelectorAll(".bar");
var body = document.getElementById("body");

button[0].addEventListener("click", playAudio);
button[1].addEventListener("click", pauseAudio);
button[2].addEventListener("click", darkM);
//var audio = new Audio("sounds/audio1.mp3");//check out how to implement audio of any format in javascript
var audio = new Audio("sounds/audio2.mkv");//check out how to implement audio of any format in javascript

function playAudio() {
    //window.focus();
    try {
        audio.play();
        button[0].style.backgroundColor = "antiquewhite";
        button[1].style.backgroundColor = "peru";
    } catch (error) {
        console.log("This file is not supported: " + error);
    }
}

function pauseAudio() {
    audio.pause();
    button[0].style.backgroundColor = "peru";
    button[1].style.backgroundColor = "antiquewhite";
}

function darkM() {
    body.style.backgroundColor = "white";
}