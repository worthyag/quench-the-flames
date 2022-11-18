////////////////////////////// Helper Object (module pattern) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/** Helper Object (module pattern) */
const helper = (() => {
    /** Creates a specified DOM element. */
    const createElement = (type, attr, value) => {
        const element = document.createElement(type);
        element.setAttribute(attr, value);
        return element;
    }

    return {createElement};
})();


////////////////////////////// GameBoard Object (module pattern) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/** GameBoard Object (module pattern) */
const gameBoard = (() => {
    /** Stores the state of the game board, always begins empty (9 empty strings).*/
    let gameBoard = ["", "", "",
                       "", "", "",
                       "", "", ""];
    /** Stores the game grid. */
    const gameGrid = document.querySelector(".game-grid");
    /** Stores the div elements that make up the game grid. */
    let gameGridArray = [...gameGrid.children];


    /** Returns the gameGridArray (the div elements inside the game grid). */
    const getGameGridArray = () => gameGridArray;

    /** Takes what is in the array and renders it to the web page. Always calls isRoundOver() at the end. */
    const renderGameBoard = () => {
        for (let i = 0; i < 9; i++) {
            if (gameBoard[i] === "W") {
                gameGridArray[i].appendChild(helper.createElement('img', 'src', "./img/icons/icon-water.svg"));
            }
            else if (gameBoard[i] === "F") {
                gameGridArray[i].appendChild(helper.createElement('img', 'src', "./img/icons/icon-flame.svg"));
            }
            else {
                gameGridArray[i].innerHTML = gameBoard[i];
            }      
        }

        // Call isRoundOver()
        console.log(game.isRoundOver());
    };

    /** Empties the game grid. */
    const clearGameGrid = () => {
        for (let i = 0; i < 9; i++) {
            gameGridArray[i].innerHTML = "";
        }
    };

    /** Empties the game board array. */
    const clearGameBoard = () => {
        for (let i = 0; i < 9; i++) {
            gameGridArray[i].innerHTML = "";
        }
    };

    /** Checks whether the inputted index of the game board array is empty (empty string). */
    const isPosEmpty = (index) => gameBoard[index] === "";

    /** 
     * Takes a given marker and adds it to the array. First checks whether the pos is empty, if so it
     * adds it to the array. Always calls renderGameBoard at the end. 
     */
    const addMarker = (marker, index) => {
        if (isPosEmpty(index)) {
            gameBoard[index] = marker;
            clearGameGrid();
            renderGameBoard();
        }
        else
            console.log("Error not empty!");
    };

    return {gameBoard, getGameGridArray, renderGameBoard, clearGameGrid, clearGameBoard, addMarker};
})();


////////////////////////////// Player Object (factory function) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/** Player Object (factory function) */
const player = (name, character) => {
    /**
     * Name- Name of the user/player.
     * Character- Whether they are playing as a water bearer or as a fire demon.
     */

    /** The symbol of the chosen character. */
    let marker = "";
    /** Boolean that decides whether it is a players turn or not. */
    let canPlay = false;


    /** Returns the name. */
    const getName = () => name;
    /** Returns the character. */
    const getCharacter = () => character;

    /** Assigns a marker based on the character they are playing as. */
    const assignMarker = () => marker = (character === "water bearer") ? "W" : "F";

    /** Returns the marker. */
    const getMarker = () => marker;

    /**
     * When the DOM element is clicked this is ran. First it checks whether canPlay is true. 
     * If so it passes the target and marker to the addMarker(marker, target) function. Calls currentPlayer().
     */
    const play = () => {
        (gameBoard.getGameGridArray()).forEach((div, index) => {
            div.addEventListener('click', (e) => {
                // console.log(`Hi ${parseInt(div.getAttribute('data-index'))}!`);

                const divAttr = parseInt(e.target.getAttribute('data-index'));
                const imgAttr = parseInt(e.target.parentNode.getAttribute('data-index'));

                if ((divAttr === index) || (imgAttr === index)) {
                    // console.log("You found me");

                    if (canPlay) {
                        gameBoard.addMarker(marker, index);
                        // canPlay = false;
                    }
                }

            });
        });
    };

    /** Sets which players turn it is. */
    const setPlayStatus = (status) => canPlay = (status === true) ? false : true;
    /** Returns the state of canPlay. */
    const getPlayStatus = () => canPlay;

    return {getName, getCharacter, assignMarker, getMarker, play, setPlayStatus, getPlayStatus};
}


////////////////////////////// Game Object (module pattern) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/** Game Object (module pattern) */
const game = (() => {
    /** Initially set to 1. Displays the round that is currently being played. */
    let round = 1;
    /** A boolean that lets the program know whether the round is over or not. */
    let roundOver = false;
    /** A boolean that lets the program know whether the game is over or not. */
    let gameOver = false;


    /** Returns the round number. */
    const getRound = () => round;

    /**
     * Checks for a 3 in a row pattern or a tie, and sets the roundOver boolean accordingly. 
     * If roundOver is true, setPlayStatus to false, and calls newRound().
     */
    const isRoundOver = () => {
        const board = gameBoard.gameBoard;
        let status = [];

        if ((board[0] === board[1]) && (board[1] === board[2])) {
            roundOver = (board[0] === "W") ? true : (board[0] === "F") ? true : false;
            status = [roundOver, 0, 1, 2];
        }

        else if ((board[3] === board[4]) && (board[4] === board[5])) {
            roundOver = (board[3] === "W") ? true : (board[3] === "F") ? true : false;
            status = [roundOver, 3, 4, 5];
        }

        else if ((board[6] === board[7]) && (board[7] === board[8])) {
            roundOver = (board[6] === "W") ? true : (board[6] === "F") ? true : false;
            status = [roundOver, 6, 7, 8];
        }

        else if ((board[0] === board[3]) && (board[3] === board[6])) {
            roundOver = (board[0] === "W") ? true : (board[0] === "F") ? true : false;
            status = [roundOver, 0, 3, 6];
        }

        else if ((board[1] === board[4]) && (board[4] === board[7])) {
            roundOver = (board[1] === "W") ? true : (board[1] === "F") ? true : false;
            status = [roundOver, 1, 4, 7];
        }

        else if ((board[2] === board[5]) && (board[5] === board[8])) {
            roundOver = (board[2] === "W") ? true : (board[2] === "F") ? true : false;
            status = [roundOver, 2, 5, 8];
        }

        else if ((board[0] === board[4]) && (board[4] === board[8])) {
            roundOver = (board[0] === "W") ? true : (board[0] === "F") ? true : false;
            status = [roundOver, 0, 4, 8];
        }

        else if ((board[2] === board[4]) && (board[4] === board[6])) {
            roundOver = (board[2] === "W") ? true : (board[2] === "F") ? true : false;
            status = [roundOver, 2, 4, 6];
        }

        else {
            let count = [0, 0]; // W : F

            for (let i of board) {
                (i === "W") ? count[0]++ : (i === "F") ? count[1]++ : "";
            }

            roundOver = ((count[0] === 5) && (count[1] === 4) ? true :
                         (count[0] === 4) && (count[1] === 5)) ? true : false;
        }

        console.log(((roundOver) && (status.length === 4)) ? "You Won!" : 
                    (roundOver) ? "You Tied!" : "Still going...");

        if (roundOver) {
            if (status[0]) {
                gameBoard.getGameGridArray()[status[1]].classList.add("won");
                gameBoard.getGameGridArray()[status[2]].classList.add("won");
                gameBoard.getGameGridArray()[status[3]].classList.add("won");
            }
            else {
                gameBoard.getGameGridArray().forEach((div) => {
                    div.classList.add("tie");
                });
            }
        }

        return (roundOver) ? "Round complete" : "Round incomplete / starting";

        // setPlayStatus to false
        // calls newRound()
    };

    /**
     * Checks if 3 rounds have been played, and sets the gameOver boolean accordingly. If gameOver 
     * is true calls resetGame(), roundReset(), displayMessage(), newGame().
     */
    const isGameOver = () => {
        if (round > 3) {
            gameOver = true;

            // resetGame()
            // roundReset()
            // displayMessage()
            // newGame()
        }
    };

    /** Creates the display element that congratulates the winner. */
    const displayMessage = () => {
        const winnerMsg = helper.createElement('div', 'class', 'winner');
        return winnerMsg;
    };

    /** Begins the game, by calling resetGame(), renderGameBoard(), and calls selectFirstPlayer(). */
    const startGame = () => {
        resetGame();
        gameBoard.renderGameBoard();
        selectFirstPlayer();
    };

    /** Randomly decides who plays first, calls setPlayStatus(). */
    const selectFirstPlayer = () => {};

    /**
     * Assigns whose turn it is to play by calling setPlayStatus(), which sets canPlay to true or false. 
     * Highlights current player’s name.
     */
    const currentPlayer = () => {};

    /** round++. Calls isGameOver(). Calls startGame(). */
    const newRound = () => {
        round++;
        isGameOver();
        startGame();
    };

    /** Displays the button to start/restart game. */
    const newGame = () => {
        const restartBtn = helper.createElement('button', 'class', 'btn');
        return restartBtn;
    };

    /** Clears the board, sets gameOver and roundOver to false, set canPlay to false. */
    const resetGame = () => {
        gameBoard.clearGameGrid();
        gameBoard.clearGameBoard();
        gameOver = false;
        roundOver = false;

        // Set canPlay to false for both players.
        ocean.setPlayStatus(true);
        blaze.setPlayStatus(true);
    };

    /** Sets round to 1, and renders it to the page. */
    const roundReset = () => {
        round = 1;
        // renders it to the page.
    };

    return {getRound, round, roundOver, gameOver,
            isRoundOver, isGameOver, displayMessage, startGame, selectFirstPlayer,
            currentPlayer, newRound, newGame, resetGame, roundReset};
})();


// Characters / Players
// Ocean
const ocean = player("Oceania", "water bearer");
ocean.assignMarker();

// Blaze
const blaze = player("Blaze", "fire demon");
blaze.assignMarker();


// Start Game
game.startGame();


// Checking
console.log(`${ocean.getName()}'s marker: `, ocean.getMarker());
console.log(`${ocean.getName()}'s play status: ${ocean.getPlayStatus()}`);

console.log(`${blaze.getName()}'s marker: `, blaze.getMarker());
console.log(`${blaze.getName()}'s play status: ${blaze.getPlayStatus()}`);



// helpers for testing

// ocean.setPlayStatus(ocean.getPlayStatus());
// blaze.setPlayStatus(blaze.getPlayStatus());

let oplay = ocean.play();
let bplay = blaze.play();