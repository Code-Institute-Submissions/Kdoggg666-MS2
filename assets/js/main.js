// ------ Memory game - JS totorial by PortEXE on  https://www.youtube.com/watch?v=3uuQ3g92oPQ ------
// Getting the date variable
let gameDate = new Date();
let gameDay = gameDate.getDate();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let gameMonth = months[gameDate.getMonth()];
let shortDate = gameDay + " " + gameMonth;
// My variables
let gameTime;
let difficulty;
let isPlay;
let savedRoundNumber = localStorage.getItem('round-number');
let roundNumber;
let isPlaySaved = localStorage.getItem("is-play");
isPlay = isPlaySaved;
getRoundNumber();
checkMusic();
//My function to chekc weather the user has muted music previously.
function checkMusic() {
    if (isPlay === "false") {
        $("#mute-button").removeClass("fa-volume-mute");
        $("#mute-button").addClass("fa-play");
    } else if (isPlay === null){
        return;
    } else {
        $("#mute-button").removeClass("fa-play");
        $("#mute-button").addClass("fa-volume-mute");
    }
}
//My function to check if the user has a previous round number stored in local storage and apply that if need be
function getRoundNumber() {
    if (savedRoundNumber !== NaN) {
        roundNumber = (savedRoundNumber);
    } else {
        roundNumber = 0;
    }
}
updateHighScore();
// My function that checks if the local storage has data from a previous session and updates required areas.
function updateHighScore() {
    let savedHighScore = localStorage.getItem('High Score');
    if (savedHighScore !== null) {
        $("#high-score").html(savedHighScore);
    }
    let savedScoreOne = localStorage.getItem('score-one');
    if (savedScoreOne !== null) {
        $("#score-one").html(savedScoreOne);
    }
    let savedScoreTwo = localStorage.getItem('score-two');
    if (savedScoreTwo !== null) {
        $("#score-two").html(savedScoreTwo);
    }
    let savedScoreThree = localStorage.getItem('score-three');
    if (savedScoreThree !== null) {
        $("#score-three").html(savedScoreThree);
    }
    let savedScoreFour = localStorage.getItem('score-four');
    if (savedScoreFour !== null) {
        $("#score-four").html(savedScoreFour);
    }
    let savedScoreFive = localStorage.getItem('score-five');
    if (savedScoreFive !== null) {
        $("#score-five").html(savedScoreFive);
    }
}
// ------- Audio controller --------
class AudioController {
    constructor() {
        this.bgMusic = new Audio("https://res.cloudinary.com/dyxe4g62g/video/upload/v1610285424/images/albums/MS2/audio/bgMusic.mp3");
        this.flipSound = new Audio("https://res.cloudinary.com/dyxe4g62g/video/upload/v1610285423/images/albums/MS2/audio/flip.wav");
        this.matchSound = new Audio("https://res.cloudinary.com/dyxe4g62g/video/upload/v1610285424/images/albums/MS2/audio/match.wav");
        this.victorySound = new Audio("https://res.cloudinary.com/dyxe4g62g/video/upload/v1610285425/images/albums/MS2/audio/victory.wav");
        this.gameOverSound = new Audio("https://res.cloudinary.com/dyxe4g62g/video/upload/v1610285423/images/albums/MS2/audio/gameover.mp3");
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
        this.flipSound.volume = 0.5;
        this.victorySound.volume = 0.6;
        this.gameOverSound.volume = 0.6;
        this.matchSound.volume = 0.5;
    }
    startMusic() {
        this.bgMusic.play();
        isPlay = true;
        localStorage.setItem("is-play", true);
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
        isPlay = false;
        localStorage.setItem("is-play", false);
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
        roundNumber--;
    }
}
// object that is used to construct new functions
class MixOrMatch {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
        //my variable for mute button
        this.mute = document.getElementById("mute-button");
        // code written by me to run toggle audio function when the mute button is clicked. 
        this.mute.addEventListener('click', () => this.muteButtonIcon());
        // my variable to restart game
        this.restart = document.getElementById("restart-button");
        // my restart game click handler
        this.restart.addEventListener('click', () => this.roundReload());
    }
    roundReload() {
        roundNumber--;
        localStorage.setItem('round-number', roundNumber);
        window.location.reload();
    }
    // Start the game function
    startGame() {
        this.roundCheck();
        roundNumber++;
        localStorage.setItem('round-number', roundNumber);
        this.removeScore();
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.musicCheck();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }
    // My function to check which round it is and reset if the round is more than 5
    roundCheck() {
        if (roundNumber >= 5) {
            roundNumber = 0;
        } else {
            return;
        }
    }
    // my function to check if music is playing
    musicCheck() {
        if ($("#mute-button").hasClass("fa-play")) {
            return;
        } else {
            this.audioController.startMusic();
        };
    }
    // function written by me to change the FA icon between stop/play and call the play/stop function
    muteButtonIcon() {
        if (isPlay === true) {
            this.mute.classList.remove("fa-volume-mute");
            this.mute.classList.add("fa-play");
            this.audioController.stopMusic();
            
        } else {
            this.mute.classList.remove("fa-play");
            this.mute.classList.add("fa-volume-mute");
            this.audioController.startMusic();
            
        }
    }
    // written by me to removes score from last round on new game
    removeScore() {
        let starsText = document.getElementById('winner');
        if (starsText == null) {
            return;
        } else {
            document.getElementById('winner').innerHTML = " ";
        }
    }
    // function that flips all the cards face down. 
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    // function that flips the cards
    flipCard(card) {
        if (this.canFlipCard(card)) {
            this.audioController.flip();
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
            if (this.cardToCheck)
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
        }
    }
    // function that checks if two cards match
    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck);
        this.cardToCheck = null;
    }
    // function that handles if two cards are a match
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if (this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }
    // function that handles if two cards arent a match
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    // gets the card class and gets its array position
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
    // start countdown
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    // --------- game over function ---------
    gameOver() {
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.getElementById('game-over-text').classList.add('visible');
        this.hideCards();
    }
    // plays the victory sound and shows the victory overlay
    victory() {
        this.reportScore();
        clearInterval(this.countDown);
        this.audioController.victory();
        document.getElementById('victory-text').classList.add('visible');
        this.hideCards();
    }
    // Function written by me to add remaining time and amount of flips to victory overlay and to give a out of 3 star rating. 
    reportScore() {
        let totalFlips = this.ticker.innerText;
        let totalTime = this.timer.innerText;
        // My code to determine a score based on flips used and time remaining        
        let flipScore = 200 - totalFlips;
        let totalScore = totalTime * flipScore;
        //insert time and flips onto victory overlay
        document.getElementById("winner").insertAdjacentHTML('beforeend', `You finished on <span class="score-text">${difficulty}</span> difficulty with <span class="score-text">${totalTime}</span> seconds remaining and used <span class="score-text">${totalFlips}</span> card flips! <br> Your final score is: <span class="score-text">${totalScore}</span>`);
        //Checks the difficulty and calculates score
        if (difficulty === "Easy") {
            scoreEasy();
        } else if (difficulty === "Medium") {
            scoreMedium();
        } else if (difficulty === "Jedi") {
            scoreJedi();
        }
        // my code to report the last 5 scores, the difficulty selected and the date to the scoreboard and to local storage. 
        if (roundNumber === 1) {
            $("#score-one").html(totalScore + " - " + difficulty + " - " + shortDate);
            localStorage.setItem('score-one', totalScore + " - " + difficulty + " - " + shortDate);
        } else if (roundNumber === 2) {
            $("#score-two").html(totalScore + " - " + difficulty + " - " + shortDate);
            localStorage.setItem('score-two', totalScore + " - " + difficulty + " - " + shortDate);
        } else if (roundNumber === 3) {
            $("#score-three").html(totalScore + " - " + difficulty + " - " + shortDate);
            localStorage.setItem('score-three', totalScore + " - " + difficulty + " - " + shortDate);
        } else if (roundNumber === 4) {
            $("#score-four").html(totalScore + " - " + difficulty + " - " + shortDate);
            localStorage.setItem('score-four', totalScore + " - " + difficulty + " - " + shortDate);
        } else if (roundNumber === 5) {
            $("#score-five").html(totalScore + " - " + difficulty + " - " + shortDate);
            localStorage.setItem('score-five', totalScore + " - " + difficulty + " - " + shortDate);
        }
        //my code to check if the current score is higher than the high score and replace it if need be
        let highScore = $("#high-score").html;
        if ($("#high-score").html() >= totalScore) {
            return;
        } else {
            $("#high-score").html(totalScore);
            //saves the high score to local storage
            localStorage.setItem('High Score', totalScore);
        }
        //My functions to assign score based on difficulty
        function scoreEasy() {
            if (totalScore >= 10000) {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Three Stars! <br>" + "<br><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
            } else if (totalScore >= 8000) {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Two Stars! <br>" + "<br><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
            } else if (totalScore >= 6000) {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get one Star! <br>" + "<br><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
            } else {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> Sorry, You get no Stars! <br>" + "<br><i class='fas fa-sad-cry fa-spin'></i><br><br>Click to start over!");
            }
        }

        function scoreMedium() {
            if (totalScore >= 16000) {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Three Stars! <br>" + "<br><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
            } else if (totalScore >= 12000) {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Two Stars! <br>" + "<br><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
            } else if (totalScore >= 8000) {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get one Star! <br>" + "<br><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
            } else {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> Sorry, You get no Stars! <br>" + "<br><i class='fas fa-sad-cry fa-spin'></i><br><br>Click to start over!");
            }
        }

        function scoreJedi() {
            if (totalScore >= 20000) {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Three Stars! <br>" + "<br><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
            } else if (totalScore >= 16000) {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Two Stars! <br>" + "<br><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
            } else if (totalScore >= 12000) {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get one Star! <br>" + "<br><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
            } else {
                document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> Sorry, You get no Stars! <br>" + "<br><i class='fas fa-sad-cry fa-spin'></i><br><br>Click to start over!");
            }
        }
    }
    // Fisher-Yates shuffle method - wikipedia
    shuffleCards() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    }
    // checks to see if a card is busy or can be flipped
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}
// Load welcome modal ONLY when the HTML has finished loading 
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", $("#welcome-modal").modal('show'));
} else {
    $("#welcome-modal").modal('show');
}

// My function for when user selects easy mode
$("#easy-button").click(function () {
    $("#easy-overlay").addClass("visible");
    $("#welcome-modal").modal('hide');
    gameTime = 80;
    difficulty = "Easy";
    ready();

});
// My function for when user selects medium mode
$("#medium-button").click(function () {
    $("#medium-overlay").addClass("visible");
    $("#welcome-modal").modal('hide');
    mediumMode();
    difficulty = "Medium";
    gameTime = 120;
    ready();
});

// My function for when user selects hard mode
$("#hard-button").click(function () {
    $("#hard-overlay").addClass("visible");
    $("#welcome-modal").modal('hide');
    hardMode();
    gameTime = 180;
    difficulty = "Jedi";
    ready();
});
// My function to add more cards when medium mode is selected
function mediumMode() {
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-8.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-8.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610805077/images/albums/MS2/Cards/card-10.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610805077/images/albums/MS2/Cards/card-10.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610805427/images/albums/MS2/Cards/card-9.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610805427/images/albums/MS2/Cards/card-9.jpg" alt="snake">' + '</div>');
}
// My function to add the max amount of cards when hard mode is selected
function hardMode() {
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-8.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-8.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610805077/images/albums/MS2/Cards/card-10.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610805077/images/albums/MS2/Cards/card-10.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-7.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-7.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610805427/images/albums/MS2/Cards/card-9.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610805427/images/albums/MS2/Cards/card-9.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610639115/images/albums/MS2/Cards/card-11.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610639115/images/albums/MS2/Cards/card-11.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610806867/images/albums/MS2/Cards/card-12.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610806867/images/albums/MS2/Cards/card-12.jpg" alt="snake">' + '</div>');
}
// Shows the new game overlay when js file has loaded
function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    // constructor that I changed to take a variable so that when you select a difficulty the game time is changed. 
    let game = new MixOrMatch(gameTime, cards);
    // add event listener for each overlay
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
            let audioController = new AudioController();
        });
    });
    // Adds event listener for each card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}