import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddRide = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    toast.success('Ride successfully added!', {
      position: 'top-center'
    });
  };

  const [rides,setRides]=useState

  return (
    
    <div className="container mx-auto p-96 text-3xl flex-row font-roboto">
      <ToastContainer /> 
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="from" className="block text-gray-700  font-bold mb-2">From</label>
          <input type="text" id="from" name="from" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block text-gray-700 font-bold mb-2">To</label>
          <input type="text" id="to" name="to" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
          <input type="date" id="date" name="date" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="starttime" className="block text-gray-700 font-bold mb-2">Starting Time</label>
          <input type="time" id="starttime" name="starttime" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="endtime" className="block text-gray-700 font-bold mb-2">Ending Time</label>
          <input type="time" id="endtime" name="endtime" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>
        <button type="submit" onClick={handleSubmit} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Add Ride
        </button>
      </form>
    </div>
  );
};

export default AddRide;
