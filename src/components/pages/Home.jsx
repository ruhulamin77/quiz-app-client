import { useEffect, useState } from 'react';
import Quiz from '../Quiz';

const Home = () => {
  const [quizzes, setQuizzes] = useState([
    {
      id: '',
      quiz: '',
      options: [],
      answers: [],
    },
  ]);

  let [quizCount, setQuizCount] = useState(0);
  useEffect(() => {
    fetch('./assets/json/quizzes.json')
      .then((res) => res.json())
      .then((data) => setQuizzes(data));
  }, []);

  const nextQuiz = () => {
    if (quizzes.length > quizCount + 1) {
      setQuizCount((quizCount += 1));
    }
    return;
  };

  const changeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.checked);
  };

  return (
    <>
      <Quiz />
      {/* <div className="quiz-container">
        <div className="quiz-header">
          <h3>Start Quiz Game</h3>
        </div>
        <div className="quiz-body">
          <h3>{quizzes[quizCount].quiz}</h3>
          {quizzes[quizCount].options.map((option, i) => (
            <>
              <label key={i} htmlFor={option}>
                <input
                  type="checkbox"
                  onClick={(e) => changeHandler(e)}
                  name={option}
                  id={option}
                />
                {option}
              </label>
              <br />
            </>
          ))}
        </div>
        <div className="quiz-footer">
          <div className="next-btn">
            <button onClick={() => nextQuiz()}>
              {quizzes.length > quizCount ? 'Next Quiz' : 'Show your score'}
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
