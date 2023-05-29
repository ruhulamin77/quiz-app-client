/* eslint-disable no-unused-vars */
import jwt_decode from 'jwt-decode';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* eslint-disable react/prop-types */
const Summary = ({ score, noq }) => {
  const user = useSelector((state) => state.auth);
  const token = localStorage.getItem('auth-token');
  const decoded = jwt_decode(token);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      `https://quiz-app-server-q68p.onrender.com/api/users/score/${decoded?.email}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ score }),
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log('Score updated');
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, [score, user?.email]);

  useEffect(() => {
    fetch(`https://quiz-app-server-q68p.onrender.com/api/users/getAllUser`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  return (
    <div>
      <h1 style={{ margin: '40px 0', color: 'black', textAlign: 'center' }}>
        {`Your score is ${score} out of ${noq * 5}`}
      </h1>
      <hr />
      <h2 style={{ margin: '15px 0' }}>Your position: </h2>
      <div className="score-table">
        {users?.map((usr, index) => (
          <Fragment key={index}>
            <div
              style={{ padding: '5px 25px', borderRadius: '25px' }}
              className={usr.email === decoded.email && 'your-core'}
              key={index}
            >
              <h4>
                {index + 1}. {usr.email}
              </h4>
              <h4>Score: {usr.score}</h4>
            </div>
            <br />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Summary;
