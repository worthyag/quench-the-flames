////////////////////////////// GameBoard Object (module pattern) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const gameBoard = (() => {
    let gameBoard = ["", "", "",
                       "", "", "",
                       "", "", ""];
    
    const renderGameBoard = () => {};
    const clearGameBoard = () => {};
    const isPosEmpty = (index) => {};
    const addMarker = (marker, index) => {};

    return {gameBoard, renderGameBoard, clearGameBoard, isPosEmpty, addMarker};
})();

// testing
console.log("game board: ", gameBoard.gameBoard);


////////////////////////////// Player Object (factory function) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const player = (name, character) => {
    let marker = "";
    let canPlay = false;

    const getName = () => name;
    const getCharacter = () => character;
    const assignMarker = () => console.log(`Hello ${name}!`);
    const play = () => {};
    const setPlay = () => {};
    const getPlay = () => {};

    return {getName, getCharacter, marker, canPlay, assignMarker, play, setPlay, getPlay};
}

// testing
const waterBearer = player("Ocean", "water bearer");
console.log(waterBearer.getCharacter());
waterBearer.assignMarker();

const fireDemon = player("Blaze", "fire demon");
console.log(fireDemon.getCharacter());
fireDemon.assignMarker();


////////////////////////////// Game Object (module pattern) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const game = (() => {
    let round = 1;
    let roundOver = false;
    let gameOver = false;

    const isRoundOver = () => {};
    const isGameOver = () => {};
    const displayMessage = () => {};
    const startGame = () => {};
    const selectFirstPlayer = () => {};
    const currentPlayer = () => {};
    const newRound = () => {
        console.log("Start: ", round);
        game.round++;
        return round;
    };
    const newGame = () => {};
    const resetGame = () => {};
    const roundReset = () => {};

    return {round, roundOver, gameOver,
            isRoundOver, isGameOver, displayMessage, startGame, selectFirstPlayer,
            currentPlayer, newRound, newGame, resetGame, roundReset};
})();

// testing
console.log(game.newRound());
console.log("Final: ", game.round);