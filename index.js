
// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

// var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("src", randomImageSource);


// var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


// //If player 1 wins
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//   document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// }
// else {
//   document.querySelector("h1").innerHTML = "Draw!";
// }

//my js

var a=Math.random();
a=a*6;
a=Math.floor(a);
a=a+1;

var b=Math.random();
b=b*6;
b=Math.floor(b);
b=b+1;

var i1="./images/dice"+a+".png";
var i2="./images/dice"+b+".png";

document.querySelector(".img1").setAttribute("src",i1);

document.querySelector(".img2").setAttribute("src",i2);

if(a==b){document.querySelector("h1").innerHTML="Draw"}
else if(a>b){document.querySelector("h1").innerHTML="🚩 Play 1 Wins!"}
else{document.querySelector("h1").innerHTML="Player 2 Wins! 🚩"}