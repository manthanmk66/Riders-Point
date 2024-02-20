import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

const Rides = () => {
  // const { udpateAboutPage } = useGlobalContext();

  // useEffect(() => udpateAboutPage(), []);

  return (
   
     
      <section className=" bg-secondary pb-2 pt-2 mb-2 mt-2" >
        
      <div className="mb-96 mt-96 flex justify-center gap-8">

<a href="./ridestatus">
<button type="button" class="flex items-center justify-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-3xl px-20 py-10 text-center me-2 mb-2">
  <span>Add A Ride</span>
  <svg class="w-3.5 h-3.5 ms-2 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</button>
</a>

<a href="./scheduledride">
<button type="button" class="flex items-center justify-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-3xl px-20 py-10 text-center me-2 mb-2">
  <span>Join A Ride</span>
  <svg class="w-3.5 h-3.5 ms-2 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</button>
</a>



<a href="./myscheduledride">
<button type="button" class="flex items-center justify-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-3xl px-20 py-10 text-center me-2 mb-2">
  <span>My Rides</span>
  <svg class="w-3.5 h-3.5 ms-2 transform rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</button>
</a>
      </div>
    </section>
  );
};

export default Rides;
