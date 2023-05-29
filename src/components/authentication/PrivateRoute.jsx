/* eslint-disable no-unused-vars */
import jwt_decode from 'jwt-decode';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/actions';

function PrivateRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  try {
    try {
      const token = localStorage.getItem('auth-token');
      const decoded = jwt_decode(token);
      if (Date.now() > decoded?.expIn) {
        return <Navigate to="/login" state={{ from: location }} />;
      }
      return children;
    } catch (error) {
      return <Navigate to="/login" state={{ from: location }} />;
    }
  } catch (error) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}

export default PrivateRoute;
