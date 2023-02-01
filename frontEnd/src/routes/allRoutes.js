import React from 'react';
import {Routes,Route} from "react-router-dom"

const allRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/add-user' element={<signup}/>
                <Route path='/payment' element={<PaymentPage/>}/>
                <Route path='/carddetails' element={<BasicUsage/>}/>
                <Route path='/Productspage' element={<ProductPages/>}/>
                 <Route path="/Productspage/:id" element={<ProductDetails/>}/>
                <Route path='/success' element={<PaymetSuccess/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
      )
}

export default allRoutes