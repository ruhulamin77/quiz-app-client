/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  function updateUser(e) {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }

  function handRegister(e) {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setError('Passwords does not match');
      return;
    }

    // dispatch(registerAction(user));

    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.confirmPassword
    ) {
      setLoading(false);
      setError('');
      fetch('https://quiz-app-server-q68p.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data?.data?._id) {
            navigate('/register-success');
          } else {
            setError(data.error);
          }
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    }
  }
  return (
    <>
      <div className="login_form">
        <div className="form_area">
          <h4>REGISTER</h4>
          <form onSubmit={handRegister}>
            <input
              required
              value={user.firstName}
              onChange={updateUser}
              placeholder="First Name"
              type="text"
              name="firstName"
              id=""
            />
            <input
              required
              value={user.lastName}
              onChange={updateUser}
              placeholder="Last Name"
              type="text"
              name="lastName"
              id=""
            />
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
            <input
              required
              value={user.confirmPassword}
              onChange={updateUser}
              placeholder="Confirm Your Password"
              type="password"
              name="confirmPassword"
              id=""
            />
            <p className="error">{error}</p>
            <input className="submitBtn" type="submit" value="REGISTER" />
            <p>
              <span>Already have an account?</span>{' '}
              <Link to="/login">Please Login</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
