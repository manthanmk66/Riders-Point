import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Ride from './Ride';
import MyRide from './MyRide';
import axios from 'axios';
import base_url from '../api/bootapi';

// Import the spinner image
import bikeSpinner from '../Assets/bike.gif';

const spinnerStyle = {
  width: '300px', // Set the width of the spinner
  height: '250px', // Set the height of the spinner
};

const MyScheduledRides = () => {
  const [loading, setLoading] = useState(false); // Track loading state
  const [ride, setRide] = useState([]);

  useEffect(() => {
    let timeoutId;

    const fetchData = async () => {
      setLoading(true); // Show loader
      try {
        const result = await axios.get(base_url + '/Rider/myRides');
        setRide(result.data);
        console.log(result.data)
      } catch (error) {
        // Handle error
        console.error('Error fetching data:', error);
        toast.error('Error fetching data');
      } finally {
        // Hide loader after 3 seconds
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchData(); // Fetch data when component mounts

    return () => {
      // Cleanup function to clear the timeout
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  return (
    <div className="font-serif justify-center mb-60 pb-2 pt-2 mt-10">
      <h4 className="text-6xl font-inter font-semibold mb-2 flex justify-center text-black" style={{ fontFamily: "Montserrat", fontWeight: "621" }}>List of My Rides</h4>

      {loading ? ( // Show spinner while loading
        <div className="flex justify-center">
          <img src={bikeSpinner} alt="Loading..." style={spinnerStyle} /> {/* Apply style to spinner */}
        </div>
      ) : (
        // Show list of rides once data is fetched
        ride.length > 0 ? (
          ride.map(item => <MyRide key={item.status_id} myride={item} style={{ fontFamily: "Montserrat"}}/>)
        ) : (
          "No Rides"
        )
      )}
    </div>
  );
};

export default MyScheduledRides;