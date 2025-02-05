import { useEffect, useState } from 'react';

const useQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError('');
    setLoading(true);
    fetch('https://quiz-app-server-q68p.onrender.com/api/quiz/getAll')
      .then((res) => res.json())
      .then((data) =>
        setQuestions((prevQuestions) => {
          return [...prevQuestions, ...data];
        })
      )
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return {
    loading,
    error,
    questions,
  };
};

export default useQuiz;
