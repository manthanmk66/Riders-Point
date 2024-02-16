

import React from 'react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react'
import Ride from './Ride';
import base_url from '../api/bootapi';
import axios from "axios";





const getAllScheduledRidesFromServer = () => {
  return axios.get(`${base_url}/scheduledRides`)
    .then((response) => {
      // Handle success
      console.log(response.data); // Log the actual rides data
      toast.success("Rides are Added");
      return response.data; // Return the rides data
    })
    .catch((error) => {
      // Handle error
      console.error(error.message);
      toast.error("Failed to fetch rides. Please try again.");
      throw error; // Re-throw to allow handling elsewhere if needed
    });
};


const MyScheduledRides=()=>{
  useEffect(()=>{

  })

const[ride,setRide]=useState([
  {
       route_id: 1,
       start_point: 'Point A',
       end_point: 'Point B',
       travel_date: '2024-02-20',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },

  {
    route_id: 2,
    start_point: 'Point c',
    end_point: 'Point D',
    travel_date: '2024-02-20',
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}
]);


  return(
    <div className='font-serif text-6xl  justify-center mb-60   pb-2 pt-2  mt-2  '>
    <p>All Rides</p> 
    <p>List of My Rides As Follows</p>
  

    {
      ride.length > 0
      ? ride.map((item)=><Ride ride={item}/>):"No Rides"
      
    }


</div>
  );

};
export default MyScheduledRides;






