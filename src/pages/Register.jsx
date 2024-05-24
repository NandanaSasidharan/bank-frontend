import React, { useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../services/allAPI';

function Register({ register }) {
  const navigate = useNavigate();
  const isRegisterForm = register ? true : false;

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const registerData = async () => {
    const { username, email, password } = userData;

    if (!username || !email || !password) {
      alert('Please fill the form');
      return;
    }

    try {
      const result = await registerAPI(userData);
      console.log('API Result:', result);

      if (result.status === 200) {
        alert(result.data.message || 'Registration successful');
        navigate('/login');
      } else {
        alert(result.response?.data?.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert(`An error occurred during registration. Please try again. ${error.response?.data?.message || error.message}`);
    }
  };

  const loginData = async () => {
    const { email, password } = userData;

    if (!email || !password) {
      alert('Please fill the form');
      return;
    }

    try {
      const result = await loginAPI(userData);
      console.log('API Result:', result);

      if (result.status === 200) {
        alert('Login successful');
        sessionStorage.setItem('existingUser', JSON.stringify(result.data.user));
        sessionStorage.setItem('token', result.data.token);
        navigate('/view');
      } else {
        alert(result.response?.data?.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert(`An error occurred during login. Please try again. ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: '800px' }}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            {/* image */}
            <img
              width={'100%'}
              height={'350px'}
              src="https://zilmoney.com/wp-content/uploads/2022/11/Pay-Bills-from-the-Comfort-of-your-Home-ZM.png"
              alt="User Login Illustration"
            />
          </div>
          <div className="col-6 card shadow p-3">
            {/* content */}
            

            <h5 className="text-center m-5">
              {isRegisterForm ? 'Register here' : 'Login here'}
            </h5>

            <form>
              {isRegisterForm && (
                <input
                  type="text"
                  onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                  placeholder="Username"
                  className="form-control my-3"
                />
              )}
              <input
                type="email"
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                placeholder="Email"
                className="form-control mb-3"
              />
              <input
                type="password"
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                placeholder="Password"
                className="form-control mb-3"
              />
            </form>

            {isRegisterForm ? (
              <div className="text-center m-3">
                <button onClick={registerData} className="btn btn-success m-4">
                  Register
                </button>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <p>Already Registered? Please Login from here...</p>
                </Link>
              </div>
            ) : (
              <div className="text-center m-3">
               <Link to='/view'>
               <button onClick={loginData} className="btn btn-success m-4">
                  Login
                </button>
               </Link>
                <Link to="/register" style={{ textDecoration: 'none' }}>
                  <p>New here? Please Register...</p>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="text-center">
          <Link to="/">
            <button className="btn btn-danger m-5">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
