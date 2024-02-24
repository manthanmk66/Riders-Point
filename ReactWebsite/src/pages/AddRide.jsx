import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import base_url from '../api/bootapi';
import { useNavigate, useSearchParams } from "react-router-dom";
import moment from "moment";


const AddRide = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [statusId, setstatusId] = useState(0);
  const [routeId, setRouteId] = useState(0);

  const [rides, setRides] = useState({
    start_point: '',
    end_point: '',
    travel_date: '',
    start_time: '',
    end_time: ''
  });
  const [ridestatus, setRidestatus] = useState({
    bike: '',
    expense: '',
    license: '',
    wantPillion: false
  });
  //Creating function to post data on server

  const handleSubmit = async (e) => {

    console.log(rides);
    console.log(ridestatus);
    e.preventDefault();
    if (statusId !== 0) {
      //Perform edit and save
      axios.post(base_url + '/Rider/updateRideDetail', { ...rides, ...ridestatus, status_id: statusId, route_id: routeId }).then(result => {

        const dateStr = moment(result.data.routeDetails.travel_date).format("YYYY-MM-DD");

        setRides({
          start_point: result.data.routeDetails.start_point,
          end_point: result.data.routeDetails.end_point,
          start_time: result.data.routeDetails.start_time,
          end_time: result.data.routeDetails.end_time,
          travel_date: dateStr
        });
        setRidestatus({
          bike: result.data.bike,
          expense: result.data.expense,
          license: result.data.license,
          wantPillion: result.data.wantPillion
        });
        toast.success('Ride updated successfully.', {
          position: 'top-center'
        });
        navigate("/myscheduledride")
      });
    } else {
      // Perform add New

      axios.post(base_url + '/Rider/addRiderRoute', { ...rides, ...ridestatus }).then(result => {
        console.log(result.data);


        toast.success('Ride created successfully.', {
          position: 'top-center'
        });
        navigate("/myscheduledride");

      }).catch(e => {
        console.error('failed:', e);
        toast.error('Something Went Wrong.', {
          position: 'top-center'
        });
      });
    }
  };

  useEffect(() => {
    checkEditMode();
  }, [searchParams]);

  const checkEditMode = () => {
    const status_id = searchParams.get("status_id");
    const route_id = searchParams.get("route_id");
    if (status_id == null || route_id == null) {
      return;
    }
    setstatusId(status_id);
    setRouteId(route_id);
    axios.get(base_url + `/Rider/myRides/${status_id}`).then(result => {
      console.log(result.data);
      if (result.data) {

        const dateStr = moment(result.data.routeDetails.travel_date).format("YYYY-MM-DD");
        console.log(dateStr);
        setRides({
          start_point: result.data.routeDetails.start_point,
          end_point: result.data.routeDetails.end_point,
          start_time: result.data.routeDetails.start_time,
          end_time: result.data.routeDetails.end_time,
          travel_date: dateStr
        });
        setRidestatus({
          bike: result.data.bike,
          expense: result.data.expense,
          license: result.data.license,
          wantPillion: result.data.wantPillion
        });
      }
    }).catch(e => {
      console.error(e);
    });
    console.log(status_id);

  };

  return (

    <div className="container p-96 text-2xl flex-row font-roboto py-36">
      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="from" className="block text-gray-700  font-bold mb-2">From</label>
              <input type="text" id="from" name="from" onChange={(e) => {
                setRides({ ...rides, start_point: e.target.value });
              }}
                value={rides.start_point}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="to" className="block text-gray-700 font-bold mb-2">To</label>
              <input type="text" id="to" name="to" onChange={(e) => {
                setRides({ ...rides, end_point: e.target.value });
              }}
                value={rides.end_point}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Date</label>
              <input type="date" id="date" name="date" onChange={(e) => {
                setRides({ ...rides, travel_date: e.target.value });
              }}
                value={rides.travel_date}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="starttime" className="block text-gray-700 font-bold mb-2">Starting Time</label>
              <input type="time" id="starttime" name="starttime" onChange={(e) => {
                setRides({ ...rides, start_time: e.target.value });
              }}
                value={rides.start_time}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="endtime" className="block text-gray-700 font-bold mb-2">Ending Time</label>
              <input type="time" id="endtime" name="endtime" onChange={(e) => {
                setRides({ ...rides, end_time: e.target.value });
              }}
                value={rides.end_time}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-4">
              <label htmlFor="from" className="block text-gray-700  font-bold mb-2">Bike Registration Number</label>
              <input type="text" id="bike" name="bike" onChange={(e) => {
                setRidestatus({ ...ridestatus, bike: e.target.value });
              }}
                value={ridestatus.bike}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>


            <div className="mb-4">
              <label htmlFor="to" className="block text-gray-700 font-bold mb-2">Expense For Ride</label>
              <input type="number" id="expense" name="expense" onChange={(e) => {
                setRidestatus({ ...ridestatus, expense: e.target.value });
              }}
                min={0}
                value={ridestatus.expense}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Driving Licence</label>
              <input type="text" id="license" name="license" onChange={(e) => {
                setRidestatus({ ...ridestatus, license: e.target.value });
              }}
                value={ridestatus.license}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
            </div>

            <div className="mb-4">
              <label htmlFor="wantPillion" className="block text-gray-700 font-bold mb-0">Want Pillion</label>
              <input type="checkbox" id="wantPillion" name="wantPillion" onChange={(e) => {
                setRidestatus({ ...ridestatus, wantPillion: e.target.checked });
              }}
                value={ridestatus.wantPillion}
                checked={ridestatus.wantPillion}
                className="ms-2" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offfset col-lg-4 offset-4">
            <button type="submit" className="w-100 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {statusId !== 0 ? "Update Ride" : "Add Ride"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRide;
