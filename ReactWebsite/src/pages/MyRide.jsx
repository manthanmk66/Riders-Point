import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import base_url from '../api/bootapi';


const Ride = ({ myride, refreshData }) => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate(`/addride?status_id=${myride.status_id}&route_id=${myride?.routeDetails?.route_id}`);

  };

  const handleDelete = () => {
    axios.post(base_url + "/Rider/deleteRide", { status_id: myride.status_id }).then(result => {
      refreshData();
    }).catch(e => {
      console.error(e);
    });
  };

  return (
    <div className='flex flex-wrap lg:flex-nowrap lg:gap-2 lg:items-center font-bold text-gray-950 border border-gray-300 p-4 rounded-lg'>
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Route ID:</span> {myride?.routeDetails?.route_id}</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Start Point:</span> {myride?.routeDetails?.start_point}</p>
          <p className="mb-2"><span className="text-gray-600">End Point:</span> {myride?.routeDetails?.end_point}</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Travel Date:</span> {myride?.routeDetails?.travel_date}</p>
          <p className="mb-2"><span className="text-gray-600">Description:</span> {myride.description}</p>
        </div>
      </div>
      <div className="flex items-center mt-4">

        <button onClick={handleclick} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-9dbc98 text-black mr-2'>Edit</button>
        <button onClick={handleDelete} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-638889 text-black'>Delete</button>
      </div>
    </div>
  );
};

export default Ride;










