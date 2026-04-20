import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (userData) => {
    setUser(userData);
    setToken(localStorage.getItem('token'));
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setToken(localStorage.getItem('token'));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Welcome to Talent-IQ</h1>
      
      {token ? (
        <div>
          <h2>Welcome back, {user?.name}!</h2>
          <p>Email: {user?.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <div style={{ marginBottom: '20px' }}>
            <button 
              onClick={() => setShowLogin(true)}
              style={{ marginRight: '10px', padding: '10px 20px' }}
            >
              Login
            </button>
            <button 
              onClick={() => setShowLogin(false)}
              style={{ padding: '10px 20px' }}
            >
              Register
            </button>
          </div>
          
          {showLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Register onRegister={handleRegister} />
          )}
        </div>
      )}
    </div>
  )
}

export default App
