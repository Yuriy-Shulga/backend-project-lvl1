import readlineSync from 'readline-sync';
import getRandomNumber from './utils.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  console.log(rulesOfGame);

  const roundsOfGame = 3;
  for (let round = 1; round <= roundsOfGame; round += 1) {
    const randomNum = getRandomNumber(2, 100);
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';
    const userAsnwer = readlineSync.question(`\nQuestion: ${randomNum}\nYour answer: `);

    if (correctAnswer !== userAsnwer) {
      console.log(`${userAsnwer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
