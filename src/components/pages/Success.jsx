import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="register-success">
      <h3>Registration Successful</h3>
      <h3>Please Login</h3>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Success;
