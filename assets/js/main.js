// ----------- Game icons -----------

$(".game-icon").mouseenter(function() {
    $(this).css("outline", "3px solid yellow").addClass("hover");
});

$(".game-icon").mouseout(function() {
    $(this).css("outline", "none").removeClass("hover");
});

$("#memory-game").click(function() {
     window.location = "memory-game.html";
});


// ----------- Links to each game on click -----------
$("#snake").click(function() {
     window.location = "snake.html";
});

$("#drum-kit").click(function() {
     window.location = "drum-kit.html";
});

$("#flappy-bird").click(function() {
     window.location = "flappy-bird.html";
});

$("#simon-says").click(function() {
     window.location = "simon-says.html";
});

$("#clock").click(function() {
     window.location = "clock.html";
});