import React from 'react';
import "./signup.css"

const Order = () => {
  return (
    <div id="create">
    <form>
      <h1>SIGN UP</h1>
      <input placeholder="User Name" id="name" type="text" required/>
      <br/>
      <input type="number" id="phone" placeholder="User Phone" required/>
        <input placeholder="User Password" id="password" type="password" required />
        <input type="submit" value="SUBMIT"/>
    </form>
  </div>
  )
}

export default Order