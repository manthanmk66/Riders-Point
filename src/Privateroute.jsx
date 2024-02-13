import React from 'react';
// import { isLoggedIn } from "aut"
import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = () => {
  return (
    <div>   
      {isLoggedIn() ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  ); 
}

export default Privateroute;
