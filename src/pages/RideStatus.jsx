import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import base_url from '../api/bootapi';




const RideStatus = () => {

  const [ridestatus,setRidestatus]=useState({});
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log(ridestatus);
    postDataToServer(ridestatus);
    navigate('/addride');
  };

  //Creating function to post data on server

  const postDataToServer = (data) => {
    axios.post(`${base_url}/ridestatus`,data).then(
      (response)=>{
        console.log(response);
        console.log("success");
        toast.success('RideStatus successfully added!', {
          position: 'top-center'   
        });
      


      },
      (error)=>{
        console.log(error);
        console.log("error");
        toast.error("Something Went Wrong");

      }
    )

  }


  return (
    <div className="container mx-auto p-96 text-3xl flex-row font-roboto">
        <ToastContainer /> 
         <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
           <div className="mb-4">
             <label htmlFor="from" className="block text-gray-700  font-bold mb-2">Bike Registration Number</label>
             <input type="text" id="bike" name="bike" onChange={(e)=>{
               setRidestatus({ ...ridestatus,bike:e.target.value});
            }}
             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
          </div>
    
    
    
          <div className="mb-4">
           <label htmlFor="to" className="block text-gray-700 font-bold mb-2">Expense For Ride</label>
            <input type="text" id="expense" name="expense"onChange={(e)=>{
               setRidestatus({ ...ridestatus,expense:e.target.value});
             }} 
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" 
              />
           </div>
    
    
    
          <div className="mb-4">
             <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Driving Licence</label>
             <input type="date" id="Licence" name="Licence" onChange={(e)=>{
               setRidestatus({ ...ridestatus,Licence:e.target.value});
             }} 
            

            
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
           </div>
    
    
           <button type="reset" onClick={handleSubmit} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
             Add Ride
           </button>
         </form>
       </div>
     );
     };
export default RideStatus;







// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const RideStatus = () => {
//   const navigate = useNavigate();

//   const handleSubmit = () => {
//     console.log("added");
//     // Navigate to '/scheduledride' route
//     navigate('/addride');
//   };

//   return (
//     <div className="container mx-auto p-96 text-3xl flex-row font-roboto">
//     <ToastContainer /> 
//     <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label htmlFor="from" className="block text-gray-700  font-bold mb-2">From</label>
//         <input type="text" id="from" name="from" onChange={(e)=>{
//           setRides({ ...rides,from:e.target.value});
//         }}
//          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
//       </div>



//       <div className="mb-4">
//         <label htmlFor="to" className="block text-gray-700 font-bold mb-2">To</label>
//         <input type="text" id="to" name="to"onChange={(e)=>{
//           setRides({ ...rides,to:e.target.value});
//         }} 
//          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" 
//          />
//       </div>



//       <div className="mb-4">
//         <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
//         <input type="date" id="date" name="date" onChange={(e)=>{
//           setRides({ ...rides,date:e.target.value});
//         }} 
        
//         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
//       </div>



//       <div className="mb-4">
//         <label htmlFor="starttime" className="block text-gray-700 font-bold mb-2">Starting Time</label>
//         <input type="time" id="starttime" name="starttime" onChange={(e)=>{
//           setRides({ ...rides,starttime:e.target.value});
//         }} 
        
//         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
//       </div>



//       <div className="mb-4">
//         <label htmlFor="endtime" className="block text-gray-700 font-bold mb-2">Ending Time</label>
//         <input type="time" id="endtime" name="endtime" onChange={(e)=>{
//           setRides({ ...rides,endtime:e.target.value});
//         }} 
        
//         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
//       </div>


//       <div className="mb-4">
//         <label htmlFor="mobno" className="block text-gray-700 font-bold mb-2">Mobile Number</label>
//         <input type="number" id="mobno" name="mobno" onChange={(e)=>{
//           setRides({ ...rides,mobno:e.target.value});
//         }} 
        
//         className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
//       </div>


//       <button type="reset" onClick={handleSubmit} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//         Add Ride
//       </button>
//     </form>
//   </div>
// );
// };

// export default RideStatus;
