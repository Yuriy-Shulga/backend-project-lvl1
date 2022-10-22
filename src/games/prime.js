import engineGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num < 4) {
    return true;
  }

  let divider = 2;

  while (num / 2 >= divider) {
    if (num % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
};

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(2, 1000);

  const question = randomNumber;

  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => engineGame(rulesOfGame, genQuestionAndAnswer);
