import engineGame from '../index.js';
import getRandomNumber from '../utils.js';

const genProgression = (startNum, step, lengthProgression) => {
  const progression = [startNum];

  for (let index = 1; index < lengthProgression; index += 1) {
    progression[index] = progression.at(-1) + step;
  }

  return progression;
};

const rulesOfGame = 'What number is missing in the progression?';

const genQuestionAndAnswer = () => {
  const lengthProgression = getRandomNumber(5, 10);
  const startNum = getRandomNumber(2, 100);
  const difference = getRandomNumber(2, 100);
  const hiddenElementIndex = getRandomNumber(0, lengthProgression - 1);
  const hiddenSymbol = '...';

  const question = genProgression(startNum, difference, lengthProgression);
  const correctAnswer = String(question[hiddenElementIndex]);
  question[hiddenElementIndex] = hiddenSymbol;

  return [question.join(' '), correctAnswer];
};

export default () => engineGame(rulesOfGame, genQuestionAndAnswer);
