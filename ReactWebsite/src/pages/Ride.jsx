import React, { useState } from 'react';

const Ride = ({ ride }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleJoinClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className='flex flex-wrap lg:flex-nowrap lg:gap-2 lg:items-center font-bold text-gray-950 border border-gray-300 p-4 rounded-lg'>
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Route ID:</span> {ride.route_id}</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Start Point:</span> {ride.start_point}</p>
          <p className="mb-2"><span className="text-gray-600">End Point:</span> {ride.end_point}</p>
        </div>

        <div className="flex flex-col">
          <p className="mb-2"><span className="text-gray-600">Travel Date:</span> {ride.travel_date}</p>
          <p className="mb-2"><span className="text-gray-600">Description:</span> {ride.description}</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <button onClick={handleJoinClick} className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-ebd9b4 text-black mr-2'>Join</button>
        {/* <button className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-9dbc98 text-black mr-2'>Edit</button>
        <button className='text-3xl border border-gray-400 px-4 py-2 rounded-lg bg-638889 text-black'>Update</button> */}
      </div>


      
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-full text-center"> 
            <p className="text-4xl font-bold mb-4">Do You Need Pillion With You For a Ride</p>
            <div className="flex justify-center">
              <button onClick={handlePopupClose} className="text-3xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded">
                No
              </button>
              <button onClick={handlePopupClose} className="text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Yes
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












