import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  // console.log(handleLogin);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  };

  return (
    <>
      <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
          <form onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='border-2 text-white bg-transparent placeholder:text-gray-400 outline-none border-emerald-600 text-xl py-3 px-5 rounded-full'
              type="email"
              placeholder='Enter Your Email'
              autoComplete="username"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='border-2 text-white bg-transparent placeholder:text-gray-400 outline-none border-emerald-600 text-xl py-3 px-5 rounded-full mt-5'
              type="password"
              placeholder='Enter Your Password'
              autoComplete="current-password"
            />
            <button className='border-2 text-white bg-emerald-600 outline-none border-none text-xl py-3 px-5 rounded-full mt-5'>
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;