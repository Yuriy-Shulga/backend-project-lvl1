import engineGame from '../index.js';
import getRandomNumber from '../utils.js';

const gcd = (num1, num2) => {
  const max = Math.max(num1, num2);
  const min = Math.min(num1, num2);

  return max % min === 0 ? min : gcd(min, max % min);
};

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const genQuestionAndAnswer = () => {
  const num1 = getRandomNumber(2, 10000);
  const num2 = getRandomNumber(2, 10000);

  const question = `${num1} ${num2}`;

  const correctAnswer = String(gcd(num1, num2));

  return [question, correctAnswer];
};

export default () => engineGame(rulesOfGame, genQuestionAndAnswer);
