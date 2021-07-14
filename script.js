'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "yay you won !! 🎉"
// console.log(document.querySelector('.message').textContent);




//SECRET NUMBER RANDOM
let number = Math.trunc(Math.random() * 10) + 1;
let newscore = 10;
let newhs = 0;
// document.querySelector('.number').textContent = number;


const displayMsg = (message) =>{
    document.querySelector('.message').textContent = message;
}





//value input will be displayed on console when click button is clicked
const checkbtn = document.querySelector('.check');
checkbtn.addEventListener('click' , ()=>{

    let guessedNum = Number(document.querySelector('.guess').value);
    // console.log(guessedNum , typeof guessedNum);
    

    //no number
   if(!guessedNum)
   {
        displayMsg('no number enter⛔')
   }

    //worng input
    else if(guessedNum > 10)
    {
        displayMsg("guess a number between 1-10❗");
    }

   //if guess higher or lower
   else if(guessedNum != number)
   {
        if(newscore > 1)
        {
            displayMsg(guessedNum > number ? "booo wrong❌! try a lower number": "booo wrong❌! try a higher number");
            newscore--;
            document.querySelector('.score').textContent = newscore ;
        }
        else{
            displayMsg("you lose!! play again");
            document.querySelector('.score').textContent = 0;
        }
   }

   //won
    else if( guessedNum === number)
    {
        displayMsg("yay you won🎉 play again!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;
        
       
        if(newscore >= newhs)
        {
        newhs = newscore;
        document.querySelector('.highscore').textContent = newhs;
        }
    }


});



let againbtn = document.querySelector('.again');
againbtn.addEventListener('click' , () =>{
    
    
    newscore = 10;
    // console.log("sajxba")
    number = Math.trunc(Math.random() * 10) + 1;
    document.querySelector('.score').textContent = newscore;
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = 'rgb(2, 13, 46)';
    document.querySelector('.number').style.width = '15rem';
    displayMsg( "Start guessing again!");
    document.querySelector('.guess').value = ''
})