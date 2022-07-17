'use strict';

// console.log("hello world");

// document.querySelector('.message').textContent = "correct number";

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//----------------------------------------------------------------------//


//handling click event
let SecNum = Math.trunc((Math.random() * 20) + 1);
document.querySelector('.number').value = SecNum;
console.log(SecNum);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', () => {
    console.log(document.querySelector('.guess').value);
    let guess = Number(document.querySelector('.guess').value)
    if (document.querySelector('.message').textContent == "correct answer!!") {
        alert("GAME OVER!! please press again!");
        document.querySelector('.message').textContent = "PLEASE PRESS AGAIN!"
    } else {
        if (score == 0) {
            document.querySelector('.message').textContent = "GAME OVER!!"
            alert("GAME OVER!! please press again!");
        } else {
            if (guess >= 0 && guess <= 20) {
                if (!guess) {
                    document.querySelector('.message').textContent = "NO VALUE";
                }
                console.log(guess, typeof(guess));
                if (guess == SecNum) {
                    document.querySelector('.message').textContent = "correct answer!!"
                    document.querySelector('.number').textContent = SecNum;
                    document.querySelector('.score').textContent = score;
                    if (highscore < score) {
                        highscore = score;
                    }
                    document.querySelector('.highscore').textContent = highscore
                    document.querySelector('body').style.backgroundColor = '#60b347';
                    document.querySelector('.number').style.width = '30rem';

                } else if (guess > SecNum) {
                    document.querySelector('.message').textContent = "GUESS TOO HIGH";
                    document.querySelector('.guess').value = "";
                    score = score - 1;
                    document.querySelector('.score').textContent = score;

                } else if (guess < SecNum) {
                    document.querySelector('.message').textContent = "GUESS TOO LOW";
                    document.querySelector('.guess').value = ""
                    score = score - 1;
                    document.querySelector('.score').textContent = score;
                }
            } else {
                document.querySelector('.message').textContent = "ENTER A VALID NUMBER";
            }
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    SecNum = Math.trunc((Math.random() * 20) + 1);
    console.log(SecNum)
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').value = SecNum;
    document.querySelector('.guess').value = ""
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = "ENTER A NUMBER";
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";
    score = 20;

})
