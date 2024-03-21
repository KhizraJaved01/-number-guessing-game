#! /usr/bin/env node

import inquirer from "inquirer";

type ansType = {
    userGuess: number
}

async function guessNumber() {
    let continueGame = true;

    while (continueGame ) {
     const systemGeneratedNo = Math.floor(Math.random()* 20);

     const answers: ansType = await inquirer.prompt([
         {
            type : "number",
            name : "userGuess",
            message : "Enter any number b/w 1 to 20"
    
         }
    ]);

     const { userGuess } = answers;

if (userGuess === systemGeneratedNo) {
    console.log(`${userGuess} is the right answer!`);
    console.log("Right guess you win!");
}else{
    console.log("Sorry, better luck next time!" );
    console.log(`Correct answer was ${systemGeneratedNo}.`);
}

     const {playAgain} = await inquirer.prompt([
       {
          type : "confirm",
          name : "playAgain",
          message : "Do you want to play again",
          default : false
       }
]);

continueGame = playAgain;

}
   }
guessNumber()