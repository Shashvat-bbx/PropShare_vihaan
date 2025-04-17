import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import Footer from './footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        username: email,  // backend expects 'username', you're sending email
        password
      });

      console.log(res.data);
      alert('Login successful');

      // Optionally save JWT to localStorage
      localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert('Login failed');
    }
  };

  return (
    <>
      <Header />
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleLogin}>
          <h2 style={styles.title}>Login to Real Estate Tokenization</h2>
          <div style={styles.inputGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={styles.input}
              autoFocus
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>

          {/* Signup Link */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link to="/signup" style={styles.signupLink}>
              <h1 style={styles.signupText}>Signup if new user</h1>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f6f7fb',
  },
  form: {
    background: '#fff',
    padding: '2rem 2.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    minWidth: '320px',
    maxWidth: '350px',
    width: '100%',
  },
  title: {
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#222',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.7rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '0.3rem',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.8rem',
    background: '#2e7dff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  signupLink: {
    textDecoration: 'none',
    display: 'inline-block',
    transition: 'transform 0.1s',
  },
  signupText: {
    fontSize: '1.1rem',
    color: '#2e7dff',
    margin: 0,
    fontWeight: 600,
    cursor: 'pointer',
    letterSpacing: '0.5px',
    transition: 'color 0.2s',
  },
};

export default Login;
