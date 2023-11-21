import React, { useState } from 'react';
import './login.css';

function Login(props) {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email && password) { 
      setLoggedIn(true);
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <h1>Welcome, {email}!</h1>
      ) : (
        <div>
          <center>
          <form className='form-login'>
            <center>
              <h1>Login Page</h1>
              <label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'
                />
              </label>
              <br />
              <label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                />
              </label>
              <br />
              <button type="button" className='login-btn' onClick={handleLogin}>
                Login
              </button><br></br>
              <button className='button' onClick={() => props.onFormSwitch('signup')}>Don't have an account? Signup</button>
            </center>
          </form>
          </center>
        </div>
      )}
    </div>
  );
}

export default Login;
