import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from '../redux/authSlice';
export const rootReducer = combineReducers({
  auth: authSlice.reducer,
});
