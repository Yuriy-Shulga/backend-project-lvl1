import engineGame from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const calc = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return `error: the ${operator} is unknown`;
  }
};

const rulesOfGame = 'What is the result of the expression?';

const genQuestionAndAnswer = () => {
  const operand1 = getRandomNumber(2, 100);
  const operand2 = getRandomNumber(2, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${operand1} ${operator} ${operand2}`;

  const correctAnswer = String(calc(operand1, operand2, operator));

  return [question, correctAnswer];
};

export default () => engineGame(rulesOfGame, genQuestionAndAnswer);
