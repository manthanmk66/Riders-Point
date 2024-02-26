import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'; // Import moment.js for date formatting
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ride = ({ myride, refreshData }) => {


  //SOS Message

 const sendSOSMessage = async () => {

  toast.success("Your SOS message has been sent successfully", {
    position: "top-center",});
  
  // Access the rider's information from myride object
  const { rp_id, routeDetails, name, mobile } = myride;
  
  // Construct the custom message including the rider's rp_id, name, and mobile number
  const message = `Emergency Emergency Emergency !!! 

  This is an SOS message from rider ${rp_id.name} on Route ${routeDetails.start_point}-${routeDetails.end_point} . Mobile Number: ${rp_id.mobile}. Please help!`;
  
  // Send the message using the API
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: "2a0ecd91-c734-4554-927b-5ce70b6c502b",
      message: message,
    }),
  }).then((res) => res.json());
  
  if (res.success) {
    console.log("SOS message sent successfully", res);
  }
};





  const navigate = useNavigate();

  const handleclick = () => {
    navigate(`/addride?status_id=${myride.status_id}&route_id=${myride?.routeDetails?.route_id}`);
  };

  const handleDelete = () => {
    axios.post(base_url + "/Rider/deleteRide", { status_id: myride.status_id }).then(result => {
      toast.success('Deleted Succesfully', {
        position: 'top-center'
      });
      refreshData();
      
      
    }).catch(e => {
      console.error(e);
    });
  };

    













  return (
    <div className='flex flex-wrap lg:flex-nowrap lg:gap-2 lg:items-center font-bold text-gray-950 border border-8 p-4 rounded-lg'>
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Route ID:</span> {myride?.routeDetails?.route_id}</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600" >Start Point:</span> {myride?.routeDetails?.start_point}</p>
          <p className="mb-2"><span className="text-gray-600">End Point:</span> {myride?.routeDetails?.end_point}</p>
          <p className="mb-2"><span className="text-gray-600">Start Time:</span> {myride?.routeDetails?.start_time}</p>

        </div>

        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Travel Date:</span> {moment(myride?.routeDetails?.travel_date).format('DD-MM-YYYY')}</p>
          <p className="mb-2"><span className="text-gray-600">Description:</span> {myride?.routeDetails?.description}</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <button onClick={handleclick} className='text-3xl border  border-gray-400 px-4 py-2 rounded-lg bg-sky-300 text-black mr-2'>Edit</button>
        <button onClick={handleDelete} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-sky-300 text-black mr-2'>Delete</button>
        <button onClick={sendSOSMessage} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-red-500 text-black'>SOS</button>
      </div>
    </div>
  );  
};

export default Ride;
