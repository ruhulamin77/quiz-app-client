import { useEffect, useState } from 'react';

const useQuiz = () => {
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError('');
    setLoading(true);
    fetch('http://localhost:5000/api/answers/getAll')
      .then((res) => res.json())
      .then((data) =>
        setAnswers((prevAnswers) => {
          return [...prevAnswers, ...data];
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
    answers,
  };
};

export default useQuiz;
