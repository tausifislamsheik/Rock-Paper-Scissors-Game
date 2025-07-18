let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const showResult = document.querySelector('#result');
const userScoreEl = document.querySelector('#user-score');
const computerScoreEl = document.querySelector('#computer-score');
const resetBtn = document.querySelector('#reset-btn');

choices.forEach(choice =>{
    choice.addEventListener('click', () =>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});


const playGame = (userChoice) =>{
     console.log('user choice', userChoice);
     const computerChoice = computerGenChoice();
     console.log('computer choice',computerChoice);

     if(userChoice === computerChoice){
        gameDraw();
     }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = computerChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            userWin = computerChoice === 'scissors' ? false : true;
        }else{
            userWin = computerChoice === 'rock' ? false : true
        }

        showWinner(userWin, userChoice, computerChoice);
        
     }
};

// Computer generate section

const computerGenChoice = () =>{
    const options = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return  options[randomIdx];
    
};

// Game draw section

const gameDraw = () =>{
    showResult.innerText = `Game TIE ! Play Again`
    showResult.style.backgroundColor = '#FE5E41'
};

// Show winner section

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin){
        showResult.innerText = `You Win! ${userChoice} beats ${computerChoice}`
        showResult.style.backgroundColor = 'green';
        userScore++
        userScoreEl.innerText = userScore;
    }else{
        showResult.innerText = `You lose. ${computerChoice} beats ${userChoice}`
        showResult.style.backgroundColor = 'red'
        computerScore++
        computerScoreEl.innerText = computerScore;
    };
   
};

// Reset game section

const resetGame = () => {
    // Animate score reset
    animateScoreReset(userScoreEl, userScore);
    animateScoreReset(computerScoreEl, computerScore);
    userScore = 0;
    computerScore = 0;

    // Fade in result message
    showResult.style.opacity = 0; // Start hidden
    showResult.innerText = 'Play your move';
    showResult.style.backgroundColor = '#1e2a5a';
    
    setTimeout(() => {
        showResult.style.transition = 'opacity 0.5s ease-in';
        showResult.style.opacity = 1;
    }, 100);
};


const animateScoreReset = (element, score) => {
    let current = score;
    const interval = setInterval(() => {
        if (current <= 0) {
            clearInterval(interval);
            element.innerText = 0;
        } else {
            current--;
            element.innerText = current;
        }
    }, 50); // Speed of the countdown (smaller = faster)
};


resetBtn.addEventListener('click', resetGame);

