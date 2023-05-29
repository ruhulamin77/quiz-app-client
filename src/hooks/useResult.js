import { useEffect, useState } from 'react';

const useResult = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError('');
    setLoading(true);
    fetch('https://quiz-app-server-q68p.onrender.com/api/result/getAll')
      .then((res) => res.json())
      .then((data) =>
        setResult((prevResult) => {
          return [...prevResult, ...data];
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
    result,
  };
};

export default useResult;
