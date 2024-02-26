import axios from 'axios';
import React, { useState } from 'react';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
import { useCurrentUser } from '../userContext';
import moment from 'moment';

const Ride = ({ ride, reloadList, isRouteJoined, isRouteJoinedAsPillon }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { currentUser } = useCurrentUser();

  const handleJoinClick = () => {
    setShowPopup(true);
  };

  const isRideCreator = () => { return ride.routeDetails.createdBy.id == currentUser.id }

  const isAlreadyJoinTheRide = () => {
    return ride.rp_id.id == currentUser.id;
  }
  const isJoinedAsPillion = () => {
    return ride.pillon && ride.pillon.id == currentUser.id;
  }

  const isJoinedAsPillionOnSameRouteOnThisEntry = () => {
    return isRouteJoinedAsPillon && isJoinedAsPillion();
  }

  const handleJoinAsRiderClick = () => {
    axios.post(base_url + '/Rider/joinAsRider', { ...ridestatus, route_id: ride.routeDetails.route_id }).then(result => {
      console.log(result.data);

      toast.success('Rider joined to route.', {
        position: 'top-center'
      });
      setShowPopup(false);
      reloadList()

    }).catch(e => {
      console.error('failed:', e);
      toast.error('Something Went Wrong.', {
        position: 'top-center'
      });
    });
  }
  const handleJoinPillionClick = () => {
    axios.post(base_url + '/Rider/joinAsPillion', { status_id: ride.status_id }).then(result => {
      console.log(result.data);


      toast.success('Pillion joined to route.', {
        position: 'top-center'
      });
      setShowPopup(false);
      reloadList()

    }).catch(e => {
      console.error('failed:', e);
      toast.error('Something Went Wrong.', {
        position: 'top-center'
      });
    });
  }
  const handlePillonRevoke = () => {
    axios.post(base_url + '/Rider/revokePillon', { status_id: ride.status_id }).then(result => {
      console.log(result.data);


      toast.success('Pillion revoked.', {
        position: 'top-center'
      });
      reloadList()

    }).catch(e => {
      console.error('failed:', e);
      toast.error('Something Went Wrong.', {
        position: 'top-center'
      });
    });
  }











  //Pillion SOS Message

  const sendSOSMessage = async () => {

    toast.success("Your SOS message has been sent successfully", {
      position: "top-center",});
  
    // Access the rider's information from myride object
    const { rp_id,routeDetails, name, mobile } = ride;

    
    // Construct the custom message including the rider's rp_id, name, and mobile number
    const message = `Emergency Emergency Emergency !!! 
    This is an SOS message from Rider ${rp_id.name} on Route ${routeDetails.start_point}-${routeDetails.end_point} . Mobile Number: ${rp_id.mobile}. Please help!`;    
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









  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const [ridestatus, setRidestatus] = useState({
    bike: '',
    expense: '',
    license: '',
    wantPillion: false
  });
  return (
    <div className='flex flex-wrap lg:flex-nowrap lg:gap-2 lg:items-center font-bold text-gray-950 border border-gray-300 p-4 rounded-lg'>
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Route ID:</span> {ride?.routeDetails?.route_id} &nbsp;<b><i>{isAlreadyJoinTheRide() ? "Your ride" : isRouteJoined ? "Already joined" : isJoinedAsPillion() ? "Joined as pillon" : isJoinedAsPillionOnSameRouteOnThisEntry() ? "Joined as pillon on same route" : ride.pillon ? "Pillon assigned" : ""}</i></b></p>
          <p className="mb-2"><span className="text-gray-600">Rider count:</span> {ride?.riderCount}</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Start Point:</span> {ride?.routeDetails?.start_point}</p>
          <p className="mb-2"><span className="text-gray-600">End Point:</span> {ride?.routeDetails?.end_point}</p>
          <p className="mb-2"><span className="text-gray-600">Start Time:</span> {ride?.routeDetails?.start_time}</p>
        </div>

        <div className="flex flex-col">

          <p className="mb-2"><span className="text-gray-600">Travel Date:</span> {moment(ride?.routeDetails?.travel_date).format('DD-MM-YYYY')}</p>
          <p className="mb-2"><span className="text-gray-600">Description</span> {ride?.routeDetails?.description}</p>
          <p className="mb-2"><span className="text-gray-600">Mobile_no:</span> {
            (ride.pillon && ride.pillon.id == currentUser.id) || isRouteJoined ? ride.rp_id.mobile : ""
          }</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Name:</span> {ride?.rp_id?.name}</p>
          {/*<p className="mb-2"><span className="text-gray-600">Mobile_no:</span> {
            ride.pillon?ride.pillon.id==currentUser.id?ride.pillon.mobile:"":""
          }</p>*/}
        </div>
      </div>
      <div className="flex items-center mt-4">
        {!isRideCreator() && !isAlreadyJoinTheRide() && !isJoinedAsPillion() && !isRouteJoined && !isRouteJoinedAsPillon ?
          <button onClick={handleJoinClick} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-ebd9b4 bg-sky-300 text-black mr-2'>Join</button> : <></>
        }
        {!isRideCreator() && !isAlreadyJoinTheRide() && !isJoinedAsPillion() && !isRouteJoined && !isRouteJoinedAsPillon && ride?.wantPillion && !ride?.pillon && <button onClick={handleJoinPillionClick} className='text-3xl border border-gray-400  bg-sky-300 px-4 py-2 rounded-lg bg-ebd9b4 text-black mr-2'>Join as pillion</button>}
        {isJoinedAsPillion() ? (
          <>
            <button onClick={handlePillonRevoke} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-ebd9b4 text-black mr-2'>Revoke as pillon</button>
            <button onClick={sendSOSMessage} className='text-3xl border border-red-600 px-4 py-2 rounded-lg bg-red-600 text-white'>Send SOS</button>
          </>
        ) : <></>}
      </div>


      {/* Popup */}
      {showPopup && (
        <div className="fixed  inset-0 z-10 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white text-2xl rounded-lg p-28 max-w-full text-center">

            <div className="">
              <div className="mb-4">
                <label htmlFor="from" className="block text-gray-700  font-bold mb-2">Bike Registration Number</label>
                <input type="text" id="bike" name="bike" onChange={(e) => {
                  setRidestatus({ ...ridestatus, bike: e.target.value });
                }}
                  value={ridestatus.bike}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500" />
                  required
              </div>


              <div className="mb-4">
                <label htmlFor="to" className="block text-gray-700 font-bold mb-2">Expense For Ride</label>
                <input type="number" id="expense" name="expense" onChange={(e) => {
                  setRidestatus({ ...ridestatus, expense: e.target.value });
                }}
                min={1}
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
                  className="ms-2" />
              </div>
            </div>
            <div className="flex justify-center">
              <button onClick={handlePopupClose} className="text-3xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded">
                Cancel
              </button>
              <button onClick={handleJoinAsRiderClick} className="text-3xl bg-sky-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Join
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Ride;
