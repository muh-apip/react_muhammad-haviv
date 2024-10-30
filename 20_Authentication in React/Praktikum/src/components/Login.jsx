import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const dummyUser = { username: 'admin', password: 'password123' };
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username === username && user.password === password) {
      localStorage.setItem('isLoggedIn', true);
      navigate('/landingPage'); 
    } else if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('isLoggedIn', true);
      navigate('/landingPage'); 
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <section className="bg-blue-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-900 md:text-2xl">
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-blue-900">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-blue-900">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
              {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
