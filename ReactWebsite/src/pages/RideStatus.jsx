import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import base_url from '../api/bootapi';

const RideStatus = () => {
  const [ridestatus, setRidestatus] = useState({
    bike: '',
    expense: '',
    licence: '',
    wantPillion:'',
    rp_id:''
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //for Debugging Purpose
    console.log("Submitting data:", ridestatus); 
    navigate("/addride");

    // Creating function to post data on server
    axios.post(base_url + '/Rider/addStatus', ridestatus)
    // axios.post(`${base_url}ride/addStatus`, ridestatus)

      .then(result => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token)
        toast.success('Added Ride Status.', {
          position: 'top-center'
        });
        
      })
      .catch(e => {
        console.error('failed:', e);
        toast.error('Something Went Wrong.', {
          position: 'top-center'
        });
      });
  };

  return (
    <div className="container mx-auto p-96 text-2xl flex-row font-roboto">
      <ToastContainer /> 
      <form className="max-w-lg mx-auto "onSubmit={handleSubmit} >

      <div className="mb-4">
          <label htmlFor="from" className="block text-gray-700  font-bold mb-2">RP ID</label>
          <input type="text" id="rp_id" name="rp_id" onChange={(e) => {
            setRidestatus({ ...ridestatus, rp_id: e.target.value });
          }}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="from" className="block text-gray-700  font-bold mb-2">Bike Registration Number</label>
          <input type="text" id="bike" name="bike" onChange={(e) => {
            setRidestatus({ ...ridestatus, bike: e.target.value });
          }}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>


        <div className="mb-4">
          <label htmlFor="to" className="block text-gray-700 font-bold mb-2">Expense For Ride</label>
          <input type="text" id="expense" name="expense" onChange={(e) => {
            setRidestatus({ ...ridestatus, expense: e.target.value });
          }}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Driving Licence</label>
          <input type="text" id="licence" name="licence" onChange={(e) => {
            setRidestatus({ ...ridestatus, licence: e.target.value });
          }}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Want Pillion</label>
          <input type="text" id="wantPillion" name="wantPillion" onChange={(e) => {
            setRidestatus({ ...ridestatus, wantPillion: e.target.value });
          }}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>


        <button type="submit"  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Ride
        </button>
      </form>
    </div>
  );
};

export default RideStatus;
 