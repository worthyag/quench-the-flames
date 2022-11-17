////////////////////////////// GameBoard Object (module pattern) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const gameBoard = (() => {
    /** Stores the state of the game board, always begins empty (9 empty strings).*/
    let gameBoard = ["", "", "",
                       "", "", "",
                       "", "", ""];


    /** Takes what is in the array and renders it to the web page. Always calls isRoundOver() at the end. */
    const renderGameBoard = () => {};

    /** Empties the game board array. */
    const clearGameBoard = () => {};

    /** Checks whether the inputted index of the game board array is empty (empty string). */
    const isPosEmpty = (index) => gameBoard[index] === "";

    /** 
     * Takes a given marker and adds it to the array. First checks whether the pos is empty, if so it
     * adds it to the array. Always calls renderGameBoard at the end. 
     */
    const addMarker = (marker, index) => {
        if (isPosEmpty(index))
            gameBoard[index] = marker
        else
            console.log("Error not empty!");
    };

    return {gameBoard, renderGameBoard, clearGameBoard, addMarker};
})();

console.log(gameBoard.gameBoard);
console.log(gameBoard.addMarker('X', 7));
console.log(gameBoard.addMarker('X', 2));
console.log(gameBoard.addMarker('X', 4));
console.log(gameBoard.addMarker('X', 4));
console.log(gameBoard.gameBoard);

////////////////////////////// Player Object (factory function) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const player = (name, character) => {
    /**
     * Name- Name of the user/player.
     * Character- Whether they are playing as a water bearer or as a fire demon.
     */

    /** The symbol of the chosen character */
    let marker = "";
    /** Boolean that decides whether it is a players turn or not. */
    let canPlay = false;


    /** Returns the name */
    const getName = () => name;
    /** Returns the character */
    const getCharacter = () => character;

    /** Assigns a marker based on the character they are playing as. */
    const assignMarker = () => console.log(`Hello ${name}!`);

    /**
     * When the DOM element is clicked this is ran. Firsts checks whether canPlay is true. 
     * If so it passes the target and marker to the addMarker(marker, target) function. Calls currentPlayer().
     */
    const play = () => {};

    /** Sets which players turn it is. */
    const setPlayStatus = (status) => (status === true) ? canPlay = false : canPlay = true;
    /** Returns the state of canPlay. */
    const getPlayStatus = () => canPlay;

    return {getName, getCharacter, marker, canPlay, assignMarker, play, setPlayStatus, getPlayStatus};
}



////////////////////////////// Game Object (module pattern) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
    const isRoundOver = () => {};

    /**
     * Checks if 3 rounds have been played, and sets the gameOver boolean accordingly. If gameOver 
     * is true calls resetGame(), roundReset(), displayMessage(), newGame().
     */
    const isGameOver = () => {};

    /** Creates the display element that congratulates the winner. */
    const displayMessage = () => {};

    /** Begins the game, by calling resetGame(), renderGameBoard(), and calls selectFirstPlayer(). */
    const startGame = () => {};

    /** Randomly decides who plays first, calls setPlayStatus(). */
    const selectFirstPlayer = () => {};

    /**
     * Assigns whose turn it is to play by calling setPlayStatus(), which sets canPlay to true or false. 
     * Highlights current player’s name.
     */
    const currentPlayer = () => {};

    /** round++. Calls isGameOver(). Calls startGame(). */
    const newRound = () => {};

    /** Displays the button to start/restart game. */
    const newGame = () => {};

    /** Clears the board, sets gameOver and roundOver to false, setPlayStatus to false. */
    const resetGame = () => {};

    /** Sets round to 1, and renders it to the page. */
    const roundReset = () => {};

    return {getRound, round, roundOver, gameOver,
            isRoundOver, isGameOver, displayMessage, startGame, selectFirstPlayer,
            currentPlayer, newRound, newGame, resetGame, roundReset};
})();