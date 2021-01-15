// ------ Memory game - JS totorial by PortEXE on  https://www.youtube.com/watch?v=3uuQ3g92oPQ ------
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
        //my variable to check weather audio is playing
        this.isPlay;
    }
    startMusic() {
        this.bgMusic.play();
        this.isPlay = true;
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
        this.isPlay = false;
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
        this.restart.addEventListener('click', () => window.location.reload());
    }
    // Start the game function
    startGame() {
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
    musicCheck() {
        if (this.mute.classList.contains("fa-play")) {
            return;
        } else {
            this.audioController.startMusic();
        };
    }
    // function written by me to change the FA icon between stop/play and call the toggleMute function
    muteButtonIcon() {
        if (this.audioController.isPlay === true) {
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
        let flipScore = 100 - totalFlips;
        let totalScore = totalTime * flipScore;
        document.getElementById("winner").insertAdjacentHTML('beforeend', `You finished with <span class="score-text">${totalTime}</span> seconds remaining and used <span class="score-text">${totalFlips}</span> card flips! <br> Your final score is: <span class="score-text">${totalScore}</span>`);
        if (totalScore >= 8000) {
            document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Three Stars! <br>" + "<br><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
        } else if (totalScore >= 6000) {
            document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Two Stars! <br>" + "<br><i class='fas fa-star fa-spin'></i><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
        } else if (totalScore >= 4000) {
            document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get one Star! <br>" + "<br><i class='fas fa-star fa-spin'></i><br><br>Click to start over!");
        } else {
            document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> Sorry, You get no Stars! <br>"+ "<br><i class='fas fa-sad-cry fa-spin'></i><br><br>Click to start over!");
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
    $("#welcome-modal").modal('show')
}
// My function for when user selects easy mode
$("#easy-button").click(function () {
    $("#easy-overlay").addClass("visible");
    $("#welcome-modal").modal('hide');
    ready();

});
// My function for when user selects medium mode
$("#medium-button").click(function () {
    $("#medium-overlay").addClass("visible");
    $("#welcome-modal").modal('hide');
    mediumMode();
    ready();
});

// My function for when user selects hard mode
$("#hard-button").click(function () {
    $("#hard-overlay").addClass("visible");
    $("#welcome-modal").modal('hide');
    hardMode();
    ready();
});
// My function to add more cards when medium mode is selected
function mediumMode() {
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-8.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-8.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610638304/images/albums/MS2/Cards/card-10.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610638304/images/albums/MS2/Cards/card-10.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610638073/images/albums/MS2/Cards/card-9.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610638073/images/albums/MS2/Cards/card-9.jpg" alt="snake">' + '</div>');
};
// My function to add the max amount of cards when hard mode is selected
function hardMode() {
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-8.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-8.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610638304/images/albums/MS2/Cards/card-10.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610638304/images/albums/MS2/Cards/card-10.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-7.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610284792/images/albums/MS2/Cards/card-7.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610638073/images/albums/MS2/Cards/card-9.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610638073/images/albums/MS2/Cards/card-9.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610639115/images/albums/MS2/Cards/card-11.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610639115/images/albums/MS2/Cards/card-11.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610639289/images/albums/MS2/Cards/card-12.jpg" alt="snake">' + '</div>');
    $(".game-container").append('<div class="card"><div class="card-back card-face">' +
        '<img src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610285621/images/albums/MS2/Cards/card-back.jpg" alt="snake">' + '</div>' + '<div class="card-front card-face"><img class="card-value" src="https://res.cloudinary.com/dyxe4g62g/image/upload/v1610639289/images/albums/MS2/Cards/card-12.jpg" alt="snake">' + '</div>');
};
// Shows the new game overlay when js file has loaded
function ready() {
    let gameLevel;
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(120, cards);
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
};