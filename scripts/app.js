/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//let dice;
var scores = [0,0];
var roundScore = 0;
var activePlayer = 0; // 0 will be first player. 1 will be the second

var listOfDice = [];



var holdScore = document.querySelector('.btn-hold');
var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'none';

let scorePlayer1 = document.getElementById('score-0');
let scorePlayer2 = document.getElementById('score-1');

scorePlayer1.innerHTML = '0';
scorePlayer2.innerHTML = '0';

let currentScore1 = document.getElementById('current-0');
let currentScore2 = document.getElementById('current-1');

currentScore1.innerHTML = '0';
currentScore2.innerHTML = '0';

document.querySelector('.btn-roll').addEventListener('click', () => {
   //1 -Get a random number!
    dice = Math.ceil(Math.random(1) * 6);

   
   listOfDice.push(dice);

   listOfDice1 = listOfDice[listOfDice.length - 1];
    
    //2 - Display the result
    
    diceDOM.style.display = 'block'; //Podia ser inline
    diceDOM.src = `dice-${dice}.png`;//Conseguimos randomizar a imagem e dizemos-lhe que numero será através da variavel dice!
    //Portanto, se dice = 3 - o JS vai buscar a image dice-3.png - e mostra o dado com 3 pintas    


    //3 - Upload the round score IF the rolled dice was not a 1 !!!
    
    if (dice !== 1) { //Basicamente o !== é diferente de 1, neste caso
        roundScore += dice;//O += equivale a roundScore + variavel
       if (activePlayer == 0) {
        currentScore1.innerHTML = roundScore;
       } else {
           currentScore2.innerHTML = roundScore;
       }
     
 
     
     } else {
        roundScore = 0;
        
      
        if (activePlayer == 0) {
            
            activePlayer = 1;
            document.querySelector('.player-1-panel').classList.add('active'); //Acrescentar class pelo JS 
            document.querySelector('.player-0-panel').classList.remove('active'); //Remover class pelo JS - podemos apenas igualar className = 'player-1-panel'
            currentScore1.innerHTML = 0 //Aqui obviamente vamos dizer que quando mudamos de jogador
                                        //o score do jogador que estáva a jogar muda para 0

    
        } else {
            
            activePlayer = 0;
            document.querySelector('.player-0-panel').classList.add('active'); //Acrescentar class pelo JS 
            document.querySelector('.player-1-panel').classList.remove('active');
            currentScore2.innerHTML = 0

        }

          
       }


});//CallBack function, não arranca logo, só quando é chamada




    holdScore.addEventListener('click', () => {
        
        if (activePlayer == 0) {
 
        activePlayer = 1;
        scores[1] += roundScore; 
        document.querySelector('.player-1-panel').classList.add('active');  
        document.querySelector('.player-0-panel').classList.remove('active');
        
        scorePlayer1.innerHTML = scores[1];
        currentScore1.innerHTML = 0;
        
        roundScore = 0;
       
        } else {
            
            activePlayer = 0;
            scores[0] += roundScore; 
           
            document.querySelector('.player-0-panel').classList.add('active'); //Acrescentar class pelo JS 
            document.querySelector('.player-1-panel').classList.remove('active');
            
            scorePlayer2.innerHTML = scores[0]
            currentScore2.innerHTML = 0;
            roundScore = 0;
            
        }

        
        //FINISH GAME!!!!!-------------
        if (scores[0] >= 30 || scores[0] >= newHighScore) {
            alert('Player Two Wins');
            roundScore = 0;
            scores = [0,0];
            activePlayer = 0;
            document.querySelector('.player-0-panel').classList.add('active'); 
            document.querySelector('.player-1-panel').classList.remove('active');
            scorePlayer1.innerHTML = '0';
            scorePlayer2.innerHTML = '0';
            currentScore1.innerHTML = '0';
            currentScore2.innerHTML = '0';
            diceDOM.style.display = 'none';
            alert('Initializing New Game');
    
        } else if (scores[1] >= 30 || scores[1] >= newHighScore){
            alert('Player One Wins');
            roundScore = 0;
            scores = [0,0];
            activePlayer = 0;
            document.querySelector('.player-0-panel').classList.add('active'); 
            document.querySelector('.player-1-panel').classList.remove('active');
            scorePlayer1.innerHTML = '0';
            scorePlayer2.innerHTML = '0';
            currentScore1.innerHTML = '0';
            currentScore2.innerHTML = '0';
            diceDOM.style.display = 'none';
            alert('Initializing New Game');
        }

        
       
    });

   

    



   

    let newGame = document.querySelector('.btn-new').addEventListener('click', () => {
        alert('Starting New Game');
        roundScore = 0;
        scores = [0,0];
        activePlayer = 0;
        document.querySelector('.player-0-panel').classList.add('active'); 
        document.querySelector('.player-1-panel').classList.remove('active');
        scorePlayer1.innerHTML = '0';
        scorePlayer2.innerHTML = '0';
        currentScore1.innerHTML = '0';
        currentScore2.innerHTML = '0';
        diceDOM.style.display = 'none';


    
        
    })


   

//document.querySelector('#current-' + activePlayer).textContent = dice; //Ao colocar aqui o activePlayer ele muda automaticamente porque
//no HTML ele está indicado como 0 e 1

//document.querySelector('#current-' + activePlayer).innerHTML= `<em> ${dice} </em> `;


//let x = document.querySelector(`#score-` + activePlayer).textContent;
//console.log(x);//Para ir buscar um valor e guardá-lo
