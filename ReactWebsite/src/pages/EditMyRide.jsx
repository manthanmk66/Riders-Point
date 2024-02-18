import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import base_url from '../api/bootapi';

const EditMyRide = () => {
  const { id } = useParams(); 
  const [ride, setRide] = useState({
    from: '',
    to: '',
    date: '',
    starttime: '',
    endtime: '',
    mobno: ''
  });

  useEffect(() => {

    axios.get(`${base_url}/Rider/getRiderRoute/${id}`)
      .then(response => {
        setRide(response.data);
      })
      .catch(error => {
        console.error('Error fetching ride data:', error);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

//     axios.put(`${base_url}/Rider/updateRiderRoute/${id}`, ride)
//       .then(result => {
//         console.log(result.data);
//         toast.success('Ride details updated.', {
//           position: 'top-center'
//         });
//       })
//       .catch(e => {
//         console.error('failed:', e);
//         toast.error('Something went wrong.', {
//           position: 'top-center'
//         });
//       });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRide({ ...ride, [name]: value });
  };

  return (
    
    <div className="container mx-auto p-96 text-2xl flex-row font-roboto py-36">
      <ToastContainer /> 
      <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="from" className="block text-gray-700  font-bold mb-2">From</label>
          <input type="text" id="from" name="from" onChange={(e)=>{
            setRide({ ...ride,from:e.target.value});
          }}
           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>



        <div className="mb-4">
          <label htmlFor="to" className="block text-gray-700 font-bold mb-2">To</label>
          <input type="text" id="to" name="to"onChange={(e)=>{
            setRide({ ...ride,to:e.target.value});
          }} 
           className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" 
           />
        </div>



        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
          <input type="date" id="date" name="date" onChange={(e)=>{
            setRide({ ...ride,date:e.target.value});
          }} 
          
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>



        <div className="mb-4">
          <label htmlFor="starttime" className="block text-gray-700 font-bold mb-2">Starting Time</label>
          <input type="time" id="starttime" name="starttime" onChange={(e)=>{
            setRide({ ...ride,starttime:e.target.value});
          }} 
          
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>



        <div className="mb-4">
          <label htmlFor="endtime" className="block text-gray-700 font-bold mb-2">Ending Time</label>
          <input type="time" id="endtime" name="endtime" onChange={(e)=>{
            setRide({ ...ride,endtime:e.target.value});
          }} 
          
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>


        <div className="mb-4">
          <label htmlFor="mobno" className="block text-gray-700 font-bold mb-2">Mobile Number</label>
          <input type="number" id="mobno" name="mobno" onChange={(e)=>{
            setRide({ ...ride,mobno:e.target.value});
          }} 
          
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
        </div>


        <button type="submit"  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          update
        </button>
      </form>
    </div>
  );
};

export default EditMyRide;
