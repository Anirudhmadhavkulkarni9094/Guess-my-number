'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "correct number 🎉";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;


// document.querySelector('.guess').value = 33;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    //to check the validation of number
    if (!guess || guess > 20 || guess <= 0) {
        document.querySelector('.message').textContent = "Enter a valid number!!";
    }
    //when player wins
    else if (guess === number) {
        document.querySelector('.message').textContent = ("🎉correct guess!");
        document.querySelector('.number').textContent = number;
        if (highscore < score) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    //when guessed number is too high
    else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📈guess to high📈";
            score--;
            document.querySelector('.score').textContent = score;
        } else {

            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "YOU LOST😥 Try Again!"
        }

    }
    //when guessed number is to low
    else if (guess < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📉guess to low📉";
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {

            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = "YOU LOST😥"
        }

    }


});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = " ";
    document.querySelector('.score').textContent = 20;
    score = 20;
});
