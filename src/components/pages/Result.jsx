import _ from 'lodash';
import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import useAnswers from '../../hooks/useAnswers';
import Analysis from '../Analysis';
import Summary from '../Summary';
const Result = () => {
  const { loading, error, answers } = useAnswers();
  const location = useLocation();
  const result = location.state?.data;

  const calculateResult = () => {
    let score = 0;
    answers.forEach((question, index1) => {
      const correctIndexes = [];
      const checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (result[index1]?.options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score += 5;
      }
    });
    return score;
  };
  const userScore = calculateResult();

  return (
    <Fragment>
      {loading && 'Loading...'}
      {error && <div>{error.message}</div>}
      {!loading && !error && answers && answers.length > 0 && (
        <div className="result-container">
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </div>
      )}
    </Fragment>
  );
};

export default Result;
