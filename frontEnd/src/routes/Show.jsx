import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Show = () => {

    const [data, setData] = useState([]);
    const getData = () => {
        fetch("http://localhost:5000/get-order").then((res) => res.json()).then((data) => {
            console.log(data);
            setData(data.orders);
        })
}

    useEffect(() => {
        getData();
    }, []);

  return (
      <div>
          <h1>Order Details</h1>
          {data.map((el, id) => {
             return <div key={id}>
                 <h2>Sub -Total:{el.sub_total}</h2>
                 <h2>Phone-Number:{el.phone_number}</h2>
             </div>
         })}
          </div>
  )
}

export default Show