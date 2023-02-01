import React from 'react';
import {Routes,Route} from "react-router-dom"
import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

const allRoutes = () => {
    return (
        <div>
            <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/add-user" element={<Signup/>}/>
                <Route path="/login-user" element={<Login/>} />
                <Route path="/add-order" element={ 
        <PrivateRoute>
          {/* <Create/> */}
        </PrivateRoute>
      } />
                 <Route path="/get-order" element={ 
        <PrivateRoute>
          {/* <Create/> */}
        </PrivateRoute>
      } />
  </Routes>
        </div>
      )
}

export default allRoutes