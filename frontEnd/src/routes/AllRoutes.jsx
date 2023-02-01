import React from 'react';
import {Routes,Route} from "react-router-dom"
import PrivateRoute from '../components/PrivateRoute';
import Home from './Home';
import Login from './Login';
import Order from './Order';
import Show from './Show';
import Signup from './Signup';

const allRoutes = () => {
    return (
        <div>
            <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<Signup/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/order" element={ 
        <PrivateRoute>
          {<Order/>}
        </PrivateRoute>
      } />
                 <Route path="/get-order" element={ 
        <PrivateRoute>
          {<Show/>}
        </PrivateRoute>
      } />
  </Routes>
        </div>
      )
}

export default allRoutes