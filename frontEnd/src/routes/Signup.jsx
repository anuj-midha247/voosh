import React from 'react';
import { useState,useContext } from "react";
import { Link ,Navigate, useNavigate} from "react-router-dom";


import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({name:"", phone: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };

  const nav=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch("http://localhost:5000/add-user", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json()).then((data) => {
        console.log(data);
        setFormData({ name:"", phone: "", password: "" });
        nav("/login");
      })
    
    
  }
  return (
    <div id="create">
    <form>
      <h1>SIGN UP</h1>
        <input placeholder="User Name" id="name" type="text" name="name"  value={formData.name} onInput={handleInput} required/>
      <br/>
      <input type="number" name="phone" id="phone" placeholder="User Phone" value={formData.phone} onInput={handleInput} required/>
        <input placeholder="User Password" name="password" id="password" type="password" value={formData.password} onInput={handleInput} required />
        <input type="submit" value="SUBMIT"  onClick={handleSubmit}/>
    </form>
  </div>
  )
}

export default Signup