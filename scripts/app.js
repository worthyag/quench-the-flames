////////////////////////////// Player Object \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const player = (name, character) => {
    this.name = name;
    this.character = character;
    this.canPlay = false;
    this.marker = "";

    const assignMarker = () => console.log(`Hello ${this.name}!`);
    const play = () => {};
    const setPlay = () => {};
    const getPlay = () => {};

    return {name, character, canPlay, marker, assignMarker, play, setPlay, getPlay};
}

const waterBearer = player("Ocean", "water bearer");
console.log(waterBearer.character);
waterBearer.assignMarker();