import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import base_url from '../src/api/bootapi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    address: '',
    mobile: '',
    mode: '' // For radio button selection
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log(formData);
    postDataToServer(formData);
    e.preventDefault();
  };

  //Creating function to post data on server
  const postDataToServer = (data) => {
    axios.post(`${base_url}/register`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success('Registration successful!', {
          position: 'top-center'
        });
        navigate('/login'); // Redirect to login page after successful registration
      },
      (error) => {
        console.log(error);
        console.log("error");
        toast.error("Something went wrong. Please try again later.");
      }
    )
  }

  return (
    <div className="container mx-auto p-8 text-2xl">
      <ToastContainer />
      <form className="max-w-lg mx-auto mt-24 mb-32" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Mode</label>
          <div>
            <label htmlFor="rider" className="mr-4">
              <input
                type="radio"
                id="rider"
                name="mode"
                value="rider"
                checked={formData.mode === "rider"}
                onChange={() => setFormData({ ...formData, mode: "rider" })}
              />
              Rider
            </label>
            <label htmlFor="pillion">
              <input
                type="radio"
                id="pillion"
                name="mode"
                value="pillion"
                checked={formData.mode === "pillion"}
                onChange={() => setFormData({ ...formData, mode: "pillion" })}
              />
              Pillion
            </label>
          </div>
        </div>
        <div  className="flex gap-8 ">
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
        <button
            type="button"
            onClick={() => navigate('/login')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Already have an account? Login
          </button>
          </div>
      </form>
    </div>
  );
};

export default Register;
