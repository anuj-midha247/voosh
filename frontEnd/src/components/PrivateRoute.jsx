
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const isAuth = localStorage.getItem("isAuth");
    return isAuth==="true"?children:<Navigate to ="/add-user"/>
  
}


export default PrivateRoute;
