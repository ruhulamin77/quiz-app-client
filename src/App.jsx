/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/authentication/PrivateRoute';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Result from './components/pages/Result';
import Success from './components/pages/Success';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/result"
          element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/register-success" element={<Success />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        {/* <Route path="/dashboard/*" element={<DashboardMain />}>
          <Route index element="hello"></Route>
          <Route path="add-quiz" element={<AddQuiz />}></Route>
          <Route path="remove-quiz" element={<RemoveQuiz />}></Route>
          <Route path="add-answer" element={<AddAnswer />}></Route>
        </Route> */}
      </Routes>
    </Layout>
  );
}

export default App;
