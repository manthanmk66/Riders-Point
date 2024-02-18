import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import base_url from '../api/bootapi';


const AddRide = () => {

  const [rides,setRides]=useState({
    from: '',
    to: '',
    date: '',
    starttime: '',
    endtime: '',
    mobno: ''
  });

  //Creating function to post data on server

  const handleSubmit = async (e) => {
    console.log(rides);
    e.preventDefault();


  axios.post(base_url+'/ride/addRiderRoute',rides).then(result=>{
    console.log(result.data);
    localStorage.setItem("token",result.data.token)
   
    toast.success('Added Ride Status.', {
      position: 'top-center'
    });
    
    
  }).catch(e=>{
    console.error('failed:', e);
    toast.error('Something Went Wrong.', {
      position: 'top-center'
    });
  })
};

  return (
    
    <div className="container mx-auto p-96 text-2xl flex-row font-roboto py-36">
      <ToastContainer /> 
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="from" className="block text-gray-700  font-bold mb-2">From</label>
          <input type="text" id="from" name="from" onChange={(e)=>{
            setRides({ ...rides,from:e.target.value});
          }}
           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>



        <div className="mb-4">
          <label htmlFor="to" className="block text-gray-700 font-bold mb-2">To</label>
          <input type="text" id="to" name="to"onChange={(e)=>{
            setRides({ ...rides,to:e.target.value});
          }} 
           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" 
           />
        </div>



        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
          <input type="date" id="date" name="date" onChange={(e)=>{
            setRides({ ...rides,date:e.target.value});
          }} 
          
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>



        <div className="mb-4">
          <label htmlFor="starttime" className="block text-gray-700 font-bold mb-2">Starting Time</label>
          <input type="time" id="starttime" name="starttime" onChange={(e)=>{
            setRides({ ...rides,starttime:e.target.value});
          }} 
          
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>



        <div className="mb-4">
          <label htmlFor="endtime" className="block text-gray-700 font-bold mb-2">Ending Time</label>
          <input type="time" id="endtime" name="endtime" onChange={(e)=>{
            setRides({ ...rides,endtime:e.target.value});
          }} 
          
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>


        <div className="mb-4">
          <label htmlFor="mobno" className="block text-gray-700 font-bold mb-2">Mobile Number</label>
          <input type="number" id="mobno" name="mobno" onChange={(e)=>{
            setRides({ ...rides,mobno:e.target.value});
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

export default AddRide;
