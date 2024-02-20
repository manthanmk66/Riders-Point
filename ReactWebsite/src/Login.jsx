import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import base_url from './api/bootapi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
    const body={
      "username":email,
      "password":password
    };
      
    axios.post(base_url+'/auth/login',body).then(result=>{
      console.log(result.data);
      localStorage.setItem("token",result.data.token)
      toast.success('Login Successfully', {
        position: 'top-center'
      });
    }).catch(e=>{
      console.error('Login failed:', e);
      toast.error('Invalid email or password', {
        position: 'top-center'
      });
    })
      
  };
  

  return (
    <div className="h-screen flex justify-center items-center text-2xl">
      <ToastContainer />
      <div className="flex justify-center py-10 items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-3xl mb-1">Hello Again!</h1>
          <p className="font-normal text-gray-600 text-2xl mb-7">Welcome Back</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input className="pl-2 outline-none border-none" type="text" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <input className="pl-2 outline-none border-none" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" onClick={handleLogin} className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
          <span className="text-2xl ml-2 hover:text-blue-500 cursor-pointer">Forgot Password?</span>
        </form>
      </div>
    </div>
  );
}

export default Login;
