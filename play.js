"use strict" //ECMAScript Version 5 and above => Feature: strictly typed js

var button = document.querySelectorAll(".btn");
var bar = document.querySelectorAll(".bar");
var body = document.getElementById("body");
var navText = document.querySelectorAll(".navbar_item a");


//var audio = new Audio("sounds/audio1.mp3");//check out how to implement audio of any format in javascript
var audio = new Audio("sounds/audio1.mp3");//check out how to implement audio of any format in javascript


button[0].addEventListener("click", playAudio);
button[1].addEventListener("click", pauseAudio);
button[2].addEventListener("click", darkMW);
button[3].addEventListener("click", darkMB);
button[4].addEventListener("click", () => {
    if (audioLoop) {
        audio.play();
    }
});

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

function darkMW() {
    body.style.backgroundColor = "white";
    body.style.color = "#444";
    navText.forEach(element => {
        element.style.color = "#444";
    });
}

function darkMB() {
    body.style.backgroundColor = "black";
    body.style.color = "peru";
    navText.forEach(element => {
        element.style.color = "peru";
    });
}

function audioLoop() {
    // console.log(typeof audio.loop + " and " + audio.loop);
    if (typeof audio.loop == "boolean") {
        return true;
        //console.log(audio.loop);
    } else {
        return false;
    }
}