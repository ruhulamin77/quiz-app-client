import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutAction } from '../redux/actions';

const Header = () => {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="header">
      <Link to="/" className="logo">
        Quiz App
      </Link>
      <div className="auth">
        <>
          <Link className="login" to="/login">
            Login
          </Link>
          <Link className="login" to="/register">
            Register
          </Link>
          {user.email && (
            <button className="logout" onClick={() => dispatch(logoutAction())}>
              Logout
            </button>
          )}
        </>
      </div>
    </nav>
  );
};

export default Header;
