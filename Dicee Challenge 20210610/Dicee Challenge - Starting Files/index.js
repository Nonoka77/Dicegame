
let diceImg = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"];

const dicee = () => {
    let randomNumber1 = Math.floor(Math.random() * diceImg.length);

    var img1 = document.querySelectorAll('img')[0].src = diceImg[randomNumber1];

    let randomNumber2 = Math.floor(Math.random() * diceImg.length);

    var img2 = document.querySelectorAll('img')[1].src = diceImg[randomNumber2];

    if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "Draw!!"
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player1 is win!"
    } else {
        document.querySelector("h1").innerHTML = "Player2 is win!🚩"
    }
}
dicee();




