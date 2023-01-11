'use strict';
// Reading the content 
console.log(document.querySelector('.message').textContent);
// .textContent for only displaying text-content of the selected element

// // Setting the content

// document.querySelector('.message').textContent = 'Correct Number!'

// // Now well read CORRECT NUMBER instead of Start Guessing

// console.log(document.querySelector('.message').textContent);

// // Secret Number and Score manupulating

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// // Now manupulating input-feild
// // For input we use ".value property"

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

// // After setting the values:-

// console.log(document.querySelector('.guess').value);

// Handling the click of the button:-

// EventListner -> mouseclick,..etc
// document.querySelector('.check').addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value);

//     document.querySelector('.message').textContent = 'Correct Number!'
// })

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;




document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);


    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'NO NUMBER!';


        // When players win
    } else if (secretNumber == guess) {

        document.querySelector('.message').textContent = 'Correct Number!🤩';

        document.querySelector('.number').textContent = secretNumber;

        // Manupulating CSS in JavaScript using .style and value given to style should be in string.
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';



        // Impliementing high score:-
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is too high
    } else if (secretNumber < guess) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High😫!'
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Suck big Time!!!😝😝'
            document.querySelector('.score').textContent = 0;
        }

        // When guess is too Low
    } else if (secretNumber > guess) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!😒';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Suck big Time!!!😝😝'
            document.querySelector('.score').textContent = 0;
        }
    }


});

// Implementing Again Button

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

})