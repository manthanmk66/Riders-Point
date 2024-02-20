import axios from 'axios';
import React, { useState } from 'react';
import base_url from '../api/bootapi';
import {  toast } from 'react-toastify';
import { useCurrentUser } from '../userContext';

const Ride = ({ ride,reloadList,isRouteJoined, isRouteJoinedAsPillon }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { currentUser } = useCurrentUser();

  const handleJoinClick = () => {
    setShowPopup(true);
  };

  const isRideCreator=()=>{return ride.routeDetails.createdBy.id==currentUser.id}

  const isAlreadyJoinTheRide=()=>{
    return ride.rp_id.id == currentUser.id;
  }
  const isJoinedAsPillion=()=>{
      return ride.pillon&&ride.pillon.id==currentUser.id;
  }

  const isJoinedAsPillionOnSameRouteOnThisEntry=()=>{
    return isRouteJoinedAsPillon && isJoinedAsPillion();
  }


  const handleJoinAsRiderClick=()=>{
    axios.post(base_url + '/Rider/joinAsRider', {...ridestatus,route_id:ride.routeDetails.route_id}).then(result => {
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
  const handleJoinPillionClick=()=>{
    axios.post(base_url + '/Rider/joinAsPillion', {status_id:ride.status_id}).then(result => {
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
  const handlePillonRevoke=()=>{
    axios.post(base_url + '/Rider/revokePillon', {status_id:ride.status_id}).then(result => {
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
          <p className="mb-2"><span className="text-gray-600">Route ID:</span> {ride?.routeDetails?.route_id} &nbsp;<b><i>{isAlreadyJoinTheRide()?"Your ride": isRouteJoined?"Already joined":isJoinedAsPillion()?"Joined as pillon":isJoinedAsPillionOnSameRouteOnThisEntry()?"Joined as pillon on same route":ride.pillon?"Pillon assigned":""}</i></b></p>
          <p className="mb-2"><span className="text-gray-600">Rider count:</span> {ride?.riderCount}</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Start Point:</span> {ride?.routeDetails?.start_point}</p>
          <p className="mb-2"><span className="text-gray-600">End Point:</span> {ride?.routeDetails?.end_point}</p>
        </div>

        <div className="flex flex-col">
          
          <p className="mb-2"><span className="text-gray-600">Travel Date:</span> {ride?.routeDetails?.travel_date}</p>
          <p className="mb-2"><span className="text-gray-600">Mobile_no:</span> {
            ride.pillon?ride.pillon.id==currentUser.id?ride.pillon.mobile:"":""
          }</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
      {!isRideCreator()&& !isAlreadyJoinTheRide()&& !isJoinedAsPillion() &&!isRouteJoined && !isRouteJoinedAsPillon ?
        <button onClick={handleJoinClick} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-ebd9b4 text-black mr-2'>Join</button>:<></>
      }
        {!isRideCreator()&& !isAlreadyJoinTheRide()&& !isJoinedAsPillion() && !isRouteJoined && !isRouteJoinedAsPillon && ride?.wantPillion && !ride?.pillon &&<button onClick={handleJoinPillionClick} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-ebd9b4 text-black mr-2'>Join as pillion</button>}
        {/* <button className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-9dbc98 text-black mr-2'>Edit</button>
        <button className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-638889 text-black'>Update</button> */}

{isJoinedAsPillion()?<button onClick={handlePillonRevoke} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-ebd9b4 text-black mr-2'>Revoke as pillon</button>:<></>}
      </div>


      
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-full text-center"> 
            
          <div className="">
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
              <button onClick={handleJoinAsRiderClick} className="text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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


























// import React from 'react';

// const Ride = ({ ride }) => {

// const handlesubmit=()=>{
  

// }

//   return (
//     <div className='flex flex-wrap lg:flex-nowrap lg:gap-2 lg:items-center font-bold text-gray-950 border border-gray-300 p-4 rounded-lg'>
//       <div className="grid grid-cols-3 w-full">
//         <div className="flex flex-col">
//           <p className="mb-2"><span className="text-gray-600">Route ID:</span> {ride.route_id}</p>
//         </div>

//         <div className="flex flex-col">
//           <p className="mb-2"><span className="text-gray-600">Start Point:</span> {ride.start_point}</p>
//           <p className="mb-2"><span className="text-gray-600">End Point:</span> {ride.end_point}</p>
//         </div>

//         <div className="flex flex-col">
//           <p className="mb-2"><span className="text-gray-600">Travel Date:</span> {ride.travel_date}</p>
//           <p className="mb-2"><span className="text-gray-600">Description:</span> {ride.description}</p>
//         </div>
//       </div>
//       <div className="flex items-center mt-4">
//         <button onClick={handlesubmit} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-ebd9b4 text-black mr-2'>Join</button>
//         {/* <button className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-9dbc98 text-black mr-2'>Edit</button>
//         <button className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-638889 text-black'>Update</button> */}
//       </div>
//     </div>
//   );
// };

// export default Ride;












