import React from 'react';
// import {isLoggedIn} from auth
// import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = () => {
  
  return (
    <div>   
      {/* {isLoggedIn() ? (
        <Outlet />
      ) : (
        <Navigate to="/login" />
      )} */}
    </div>
  ); 
}

export default Privateroute;


// import React from "react";
// import { Outlet } from "react-router-dom";
// import AuthenticationService from "../../api/authentication/AuthenticationService";
// import { Navigate } from "react-router-dom";

// const useAuth = () => {
//   return AuthenticationService.isUserLoggedIn();
// };
// const ProtectedRoutesUser = () => {
//   const isAuth = useAuth();
//   return isAuth ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoutesUser;
