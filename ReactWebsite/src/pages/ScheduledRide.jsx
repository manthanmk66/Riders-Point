import React from 'react';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Ride from './Ride';
import base_url from '../api/bootapi';
import axios from "axios";
import { useCurrentUser } from '../userContext';

const ScheduledRide = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const [ride, setRide] = useState([]);
  const { currentUser } = useCurrentUser();
  const fetchData = () => {
    axios.get(base_url + "/Rider/allRides").then(result => {


      result.data.forEach(element => {
        element.riderCount = result.data.filter(it => it.routeDetails.route_id === element.routeDetails.route_id).length;
      });
      setRide(result.data);
    }).catch(e => {
      console.error(e);
    });
  };
  const checkIsRouteJoined = (item) => {
    const similarRoutes = ride.filter(it => it.routeDetails.route_id == item.routeDetails.route_id);
    return !!similarRoutes.find(it => it.rp_id.id == currentUser.id);
  };
  const checkIsRouteJoinedAsPillon = (item) => {
    const similarRoutes = ride.filter(it => it.routeDetails.route_id == item.routeDetails.route_id);
    return !!similarRoutes.find(it => it.pillon && it.pillon.id == currentUser.id);
  };
  return (
    <div className='font-serif justify-center mb-60 pb-2 pt-12 mt-2 '>
<h4 className='text-6xl flex justify-center text-black' style={{ fontFamily: "Montserrat", fontWeight: "621" }}>All Rides</h4>
      {
        ride.length > 0
          ? ride.map((item) => <Ride isRouteJoined={checkIsRouteJoined(item)} isRouteJoinedAsPillon={checkIsRouteJoinedAsPillon(item)} key={item.status_id} ride={item} reloadList={() => {
            // where click on join or join as pillon it will get latest data
            fetchData();
          }} />) : "No Rides"

      }


    </div>
  );

};
export default ScheduledRide;






