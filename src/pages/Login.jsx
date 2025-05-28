// src/pages/Login.jsx
import React, { useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate , Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <hr style={{ margin: '20px 0' }} />

      <button
        onClick={handleGoogleLogin}
        style={{
          backgroundColor: '#4285F4',
          color: 'white',
          padding: '10px',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Sign in with Google
      </button>

      <p>
      Don't have an account? <Link to="/Signup" style={{ color: '#4285F4' }}>Sign up</Link>
      </p>

      <p>
  Don't have an account? <Link to="/Signup" style={{ color: '#4285F4' }}>Sign up</Link>
</p>
</div>

);
};

export default Login;
