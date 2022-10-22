import engineGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const genQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 100);

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => engineGame(rulesOfGame, genQuestionAndAnswer);
