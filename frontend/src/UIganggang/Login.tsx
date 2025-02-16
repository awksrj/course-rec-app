import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginCourseRec.css';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="page-container">
      <header>
        <nav>
          <ul>
          <li><button>About</button></li>  {/* Placeholder */}
          <li><button>Contact</button></li> {/* Placeholder */}
          </ul>
          <div className="auth-buttons">
            <button className="sign-in">Sign In</button>
            <button className="register" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </nav>
      </header>

      <main>
        <div className="container">
          <div className="card">
            <h2>WELCOME TO (NAME)</h2>
            <p>YOUR ENTIRE COURSE TRACKING</p>
            <p>We are here to help you keep track of your classes and make sure that you graduate on time!!!</p>
          </div>
          <button id="signup-btn" onClick={handleSignUpClick}>
            Sign up - It's free
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
