import React from 'react'
import { useState,useContext } from "react";
import { Link ,Navigate, useNavigate} from "react-router-dom";

import './signup.css';
const Login = () => {
  const [formData, setFormData] = useState({ phone: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  };

  const nav=useNavigate()
  const handleSubmit = (e) => {
  
    e.preventDefault();
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res.json()).then((data) => {
        console.log(data.token);
        setFormData({ phone: "", password: "" });
        localStorage.setItem("isAuth", "true");
        nav("/get-order")
      })
    
    
  }

    return (
      <div id="create">
    <form>
      <h1>LOGIN</h1>
      <input placeholder="User Phone" id="name" name="phone"  type="text" value={formData.phone} onInput={handleInput} required/>
      <br/>
        <input placeholder="User Password" id="password" name="password"  type="password" value={formData.password} onInput={handleInput} required />
        <input type="submit" value="SUBMIT" onInput={handleSubmit}/>
    </form>
  </div>
  )
}

export default Login;