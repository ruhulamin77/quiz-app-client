/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useQuiz from '../hooks/useQuiz';
import Answers from './Answers';
import ProgressBar from './ProgressBar';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case 'answer':
      const questions = _.cloneDeep(state);
      questions[action.questionId].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { questions, loading, error } = useQuiz();
  const [currentQuestions, setCurrentQuestions] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'questions', value: questions });
  }, [questions]);

  const changeHandler = (e, index) => {
    dispatch({
      type: 'answer',
      questionId: currentQuestions,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  // handle next question
  const handleNextQuestions = () => {
    if (currentQuestions <= questions.length) {
      setCurrentQuestions((prevQuestions) => prevQuestions + 1);
    }
  };
  // handle previous questions
  const handlePreviousQuestions = () => {
    if (currentQuestions >= 0) {
      setCurrentQuestions((prevQuestions) => prevQuestions - 1);
    }
  };

  const quizSubmit = () => {
    const email = user.email;
    fetch(
      `https://quiz-app-server-q68p.onrender.com/api/result/${'647080c4598ead408fd662e0'}`,
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify({ questions: qna }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // progress bar
  const progress =
    questions.length > 0
      ? ((currentQuestions + 1) / questions.length) * 100
      : 0;

  return (
    <>
      <h1 className="quiz-header">Answer all the quiz and get your result</h1>
      <div className="quiz-container">
        <hr />
        {loading && 'Loading...'}
        {error && <div>{error.message}</div>}
        {!loading && qna.length === 0 && 'No data found'}
        {!loading && !error && qna && qna.length > 0 && (
          <>
            <h3 className="question">{qna[currentQuestions]?.title}</h3>
            <h4 className="notice">Question can have multiple answers</h4>
            <Answers
              input
              options={qna[currentQuestions]?.options}
              changeHandler={changeHandler}
            />
          </>
        )}
        <div className="next-btn-container">
          <button
            className={currentQuestions < 1 ? 'dis-button' : 'quiz-button'}
            disabled={currentQuestions === 0}
            onClick={() => handlePreviousQuestions()}
          >
            Previous Quiz
          </button>
          <ProgressBar progress={progress} />

          {questions.length <= currentQuestions + 1 ? (
            <Link to="/result" state={{ data: qna }}>
              <button onClick={quizSubmit} className="submit-quiz">
                Submit Quiz
              </button>
            </Link>
          ) : (
            <button
              className="quiz-button"
              onClick={() => handleNextQuestions()}
            >
              Next Quiz
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;
