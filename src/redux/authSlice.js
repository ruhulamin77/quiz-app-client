/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';

// import jwt_decode from 'jwt_decode';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    score: '',
    error: '',
    loading: true,
  },
  reducers: {
    setRegister: (state, action) => {
      const { firstName, lastName, email, password, confirmPassword, error } =
        action.payload;
      return {
        ...state,
        isAuth: true,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        error: error,
        loading: false,
      };
    },
    setLogin: (state, action) => {
      const token = localStorage.getItem('auth-token');
      if (token) {
        const decoded = jwt_decode(token);
        return { ...state, isAuth: true, email: decoded.email };
      }
    },
    setLogout: (state, action) => {
      localStorage.removeItem('auth-token');
      return {
        ...state,
        isAuth: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
        loading: true,
      };
    },
    setError: (state, action) => {
      const { error } = action.payload;
      return { ...state, error: error };
    },
    setLoading: (state, action) => {
      const { loading } = action.payload;
      console.log(action.payload);
      return { ...state, loading: loading };
    },
  },
});
