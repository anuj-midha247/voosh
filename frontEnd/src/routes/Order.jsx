import React from 'react';
import { useState,useContext } from "react";
import { Link ,Navigate, useNavigate} from "react-router-dom";
import "./signup.css"

const Order = () => {
    const [formData, setFormData] = useState({ phone_number: "", sub_total: "" });

    const handleInput = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value })
    };
  
    const nav=useNavigate()
    const handleSubmit = (e) => {
    
      e.preventDefault();
      fetch("http://localhost:5000/add-order", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        }
      })
        .then((res) => res.json()).then((data) => {
          console.log(data);
          setFormData({ phone_number: "", sub_total: "" });
          nav("/get-order");
        })
      
      
    }

  return (
    <div id="create">
    <form>
      <h1>ORDER</h1>
      <input type="number" id="phone" name="phone_number" value={formData.phone_number} onInput={handleInput} placeholder="User Phone" required/>
        <input placeholder="Sub_total" name="sub_total" id="password" value={formData.sub_total} onInput={handleInput} type="number" required />
        <input type="submit" value="SUBMIT" onClick={handleSubmit}/>
    </form>
  </div>
  )
}

export default Order