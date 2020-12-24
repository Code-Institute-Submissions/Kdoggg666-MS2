// ------ Memory game - JS totorial by PortEXE on  https://www.youtube.com/watch?v=3uuQ3g92oPQ --------

// ------- Audio controller --------

class AudioController {
    constructor() {
        this.bgMusic = new Audio("/assets/audio/reptile-hunt/bgMusic.mp3");
        this.flipSound = new Audio("/assets/audio/reptile-hunt/flip.wav");
        this.matchSound = new Audio("/assets/audio/reptile-hunt/match.wav");
        this.victorySound = new Audio("/assets/audio/reptile-hunt/victory.wav");
        this.gameOverSound = new Audio("/assets/audio/reptile-hunt/gameover.mp3");
        this.bgMusic.volume = 0.2;
        this.bgMusic.loop = true;

    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
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

    }



    // Start the game function
    startGame() {
        this.removeScore()
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;

    }
    // written by me to removes score from last round on new game
    removeScore() {
        let starsText = document.getElementById('winner');
        if (starsText = null) {
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
        document.getElementById("winner").insertAdjacentHTML('beforeend', " You finished with " + totalTime + " seconds remaining and used " + totalFlips + " card flips!");
        if (totalTime > 65) {
            document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Three Stars! <br>" + "<br><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>");
        } else if (totalTime > 40) {
            document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get Two Stars! <br>" + "<br><i class='fas fa-star'></i><i class='fas fa-star'></i>");
        } else if (totalTime > 20) {
            document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> You get one Star! <br>" + "<br><i class='fas fa-star'></i>");
        } else {
            document.getElementById("winner").insertAdjacentHTML("beforeend", "<br> Sorry, You get no Stars! <br>");
        }
    }



    // Fisher-Yates shuffle method      - wikipedia
    shuffleCards() {
        for (let i = this.cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i + 1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    }

    //checks to see if a card is busy or can be flipped
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;

    }
}


// -------- Load memory-game.js ONLY when the HTML has finished loading 
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}


function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(100, cards);
    let muteButton = document.getElementById("mute");

    // -------- add event listener for each overlay
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
            let audioController = new AudioController();

        });
    });
    // -------- add event listener for each card
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}




















// ------ Back Button --------
//$(".back-to-home").mouseenter(function () {
//  $(this).css("outline", "3px solid yellow").addClass("hover");
//});

//$(".back-to-home").mouseout(function () {
//$(this).css("outline", "none").removeClass("hover");
//});

//$(".back-to-home").click(function () {
// window.location = "index.html";
//});

// ------ Start game button --------
//$(".start-game-memory").mouseenter(function () {
//  $(this).css("outline", "3px solid yellow").addClass("hover");
//});

//$(".start-game-memory").mouseout(function () {
// $(this).css("outline", "none").removeClass("hover");
//});