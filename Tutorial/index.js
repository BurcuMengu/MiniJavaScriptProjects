const prompt = require("prompt-sync")();
const name = prompt("What is your name?");
console.log("Hello", name ,"welcome to our game!");

const shouldWePlay = prompt("Do you want to play? ");
//const condisiton = shouldWePlay.toLowerCase() === "yes";
//console.log(condition);
if (shouldWePlay.toLowerCase() === "yes") {
    const leftOrRight = prompt("You enter a maze, do you want to go left or right? ");
    if (leftOrRight === "left") {
        console.log("You go left and see a bridge...");
        const cross = prompt("Do you want to cross the bridge? ").toLowerCase();
        if (cross === "yes" || cross === "y" || cross === "okay") {
            console.log("You cross but the bridge was weak and broke an you fell. You lost...");
        } else {
            console.log("Good choice... You win");
        }

    } else {
        console.log("You go right and fall off a liff...");
    }

} else if (shouldWePlay.toLowerCase() === "no"){
    console.log("Okay :(")
} else {
    console.log("Invalid input...")
}
