import readlineSync from 'readline-sync';

export default (rulesOfGame, game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rulesOfGame);

  const roundsOfGame = 3;

  for (let round = 1; round <= roundsOfGame; round += 1) {
    const [question, correctAnswer] = game();
    const userAsnwer = readlineSync.question(`\nQuestion: ${question}\nYour answer: `);

    if (correctAnswer !== userAsnwer) {
      console.log(`${userAsnwer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
