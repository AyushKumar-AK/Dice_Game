// Use prompt() to ask the user for player names
const player1 = prompt("Enter Player 1 name:");
const player2 = prompt("Enter Player 2 name:");


document.getElementById("p1").textContent = player1;
document.getElementById("p2").textContent = player2;
// Generate random numbers and set dice images
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");

dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Set the winner message based on the random numbers
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = `${player1} Wins!`;
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = `${player2} Wins!`;
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}
