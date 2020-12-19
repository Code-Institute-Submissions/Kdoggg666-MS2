$(document).ready(function () {
    console.log("I'm Ready!");
});

// ----------- Game icons -----------

$(".game-icon").mouseenter(function () {
    $(this).css("outline", "3px solid yellow").addClass("hover");
});

$(".game-icon").mouseout(function () {
    $(this).css("outline", "none").removeClass("hover");
});

$("#memory-game").click(function () {
    window.location = "memory-game.html";
});


// ----------- Links to each game on click -----------
$("#snake").click(function () {
    window.location = "snake.html";
});

$("#drum-kit").click(function () {
    window.location = "drum-kit.html";
});

$("#flappy-bird").click(function () {
    window.location = "flappy-bird.html";
});

$("#simon-says").click(function () {
    window.location = "simon-says.html";
});

$("#clock").click(function () {
    window.location = "clock.html";
});


// ------------ Play Audio ---------------------------


// some code taken from mikael coker on https://stackoverflow.com/questions/42492313/how-to-use-javascript-to-control-audio-element

$('.play').click(function () {
    var audio = document.getElementById('audio');
    

    if (audio.paused) {

        audio.play();
        $(this).removeClass("fa fa-play").addClass("fa fa-pause");
    } else {
        audio.pause();
        $(this).removeClass("fa fa-pause").addClass("fa fa-play");
    }
    audio.addEventListener('ended', function () {
        $(this).removeClass("fa fa-pause").addClass("fa fa-play");
    });

    audio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);

});