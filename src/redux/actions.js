/* eslint-disable no-unused-vars */
import { authSlice } from './authSlice';

const { actions } = authSlice;

// login action
export const registerAction = (payload) => (dispatch) => {
  dispatch(actions.setRegister(payload));
};
// login action
export const loginAction = (payload) => (dispatch) => {
  dispatch(actions.setLogin());
};

// logout action
export const logoutAction = () => (dispatch) => {
  dispatch(actions.setLogout());
};
// error action
export const errorAction = () => (dispatch) => {
  dispatch(actions.setLogout());
};
// error action
export const loadingAction = (payload) => (dispatch) => {
  dispatch(actions.setLoading(payload));
};

// get user data
// export const getAllUsersAction = (payload) => (dispatch) => {
//   const { user } = payload;
//   fetch(`http://localhost:5000/api/users`)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         dispatch(actions.setError('Something went wrong'));
//       }
//     })
//     .then((json) => dispatch(actions.setData(json)));
// };
