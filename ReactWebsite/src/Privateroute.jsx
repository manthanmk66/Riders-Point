import React, { useEffect } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useCurrentUser } from './userContext';
// import {isLoggedIn} from auth
// import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = ({ children }) => {

  let { currentUser } = useCurrentUser();
  return (currentUser
    ? < >{children}</>
    : <Navigate to={"/login"}/>

  );
};

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
