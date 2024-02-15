import React from 'react';

const Ride = ({ ride }) => {
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
      <button className='text-3xl border border-gray-400 px-4 py-2 rounded-lg mt-4 lg:mt-0 bg-black text-white'>Join</button>
    </div>
  );
};










//     <div>

// <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//   <div class="px-4 py-2">
//     <div class="flex flex-wrap -mx-2">
//       <div class="w-full md:w-1/2 px-2 mb-4">
//         <strong class="block">Route ID:</strong> 1
//       </div>
//       <div class="w-full md:w-1/2 px-2 mb-4">
//         <strong class="block">Start point:</strong> point A
//       </div>
//       <div class="w-full md:w-1/2 px-2 mb-4">
//         <strong class="block">End point:</strong> point B
//       </div>
//       <div class="w-full md:w-1/2 px-2 mb-4">
//         <strong class="block">Travel Date:</strong> 2024-02-20
//       </div>
//       <div class="w-full px-2 mb-4">
//         <strong class="block">Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
   




    


export default Ride