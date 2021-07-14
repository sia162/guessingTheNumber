
let secretNumber = Math.trunc(Math.random()*10) + 1;
let score = 10; //state variable
let highscore = 0; //state variable





document.querySelector('.check').addEventListener('click' , () =>{

    const guessed = Number(document.querySelector('.guess').value);
    console.log(guessed, typeof guessed);

    if(!guessed){
        document.querySelector('.message').textContent = "no number entered"
    }

    //when won
    else if(guessed === secretNumber)
    {
        document.querySelector('.message').textContent = "CORRECT NUMBER!!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //when guess greater
    else if(guessed > secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = "try lower!"
            score--;
            document.querySelector('.score').textContent = score
        }
        else{
            document.querySelector('.message').textContent = "you lost the game!"
            document.querySelector('.score').textContent = 0;
        }
        
    }

    //when guess lower
    else if(guessed < secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = "try higher!"
            score--;
            document.querySelector('.score').textContent = score
        }
        else{
            document.querySelector('.message').textContent = "you lost the game!"
            document.querySelector('.score').textContent = 0;
        }
    }
});





let againbtn = document.querySelector('.again');
againbtn.addEventListener('click' , () =>{
    
    score = 10;
    secretNumber = Math.trunc(Math.random() * 10) + 1;
    //restoring all the values back to start
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = 'rgb(2, 13, 46)';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent =  "Start guessing again!";
    document.querySelector('.guess').value = ''

    


    // document.querySelector('.highscore').textContent = newhs; 
    // console.log(number);
})
