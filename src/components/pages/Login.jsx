/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable indent */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/actions';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  function updateUser(e) {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }
  function handleLogin(e) {
    e.preventDefault();

    if (user.email && user.password) {
      fetch('https://quiz-app-server-q68p.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.data._id) {
            if (data.status === 'success') {
              localStorage.setItem('auth-token', JSON.stringify(data.token));
              dispatch(loginAction());

              navigate('/');
            } else {
              alert('Wrong login info');
            }
          }
        })
        .catch((error) => {
          alert('Something went wrong!');
        });
    }
  }
  return (
    <>
      <div className="login_form">
        {/* <h2>Please login first to play Quiz !</h2> */}
        <div className="form_area">
          <h4>LOGIN</h4>
          <form onSubmit={handleLogin}>
            <input
              required
              value={user.email}
              onChange={updateUser}
              placeholder="Enter Your Email"
              type="email"
              name="email"
              id=""
            />
            <input
              required
              value={user.password}
              onChange={updateUser}
              placeholder="Enter Your Password"
              type="password"
              name="password"
              id=""
            />
            <input className="submitBtn" type="submit" value="LOGIN" />
            <p>
              <span>Do not have account?</span>{' '}
              <Link to="/register">Please register</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
