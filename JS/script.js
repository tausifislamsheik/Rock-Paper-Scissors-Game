let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const showResult = document.querySelector('#result')

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
        showResult.style.backgroundColor = 'green'
    }else{
        showResult.innerText = `You lose. ${computerChoice} beats ${userChoice}`
        showResult.style.backgroundColor = 'red'
    }
}