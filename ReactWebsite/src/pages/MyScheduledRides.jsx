

import React from 'react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Ride from './Ride';
import base_url from '../api/bootapi';
import axios from "axios";
import MyRide from './MyRide';


const MyScheduledRides = () => {
  useEffect(() => {
    getMyRides();
  }, []);
  const getMyRides = () => {
    axios.get(base_url + "/Rider/myRides").then(result => {
      setRide(result.data);
    }).catch(e => {

    });
  };
  const [ride, setRide] = useState([]);


  return (
    <div className='font-serif   justify-center mb-60   pb-2 pt-2  mt-10  '>
      <h4 className='text-6xl font-extrabold flex justify-center  text-black'>List of My Rides</h4>


      {
        ride.length > 0
          ? ride.map((item) => <MyRide key={item.status_id} myride={item} refreshData={() => {
            getMyRides();
          }} />) : "No Rides"

      }


    </div>
  );

};
export default MyScheduledRides;






