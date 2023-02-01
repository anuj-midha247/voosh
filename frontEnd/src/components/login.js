import React from 'react'
import './signup.css';
const login = () => {
    return (
      <div>
    <div class="login">
    <form>
        <label for="chk" aria-hidden="true">Login</label>
        <input type="phone" name="email" placeholder="Phone" required=""/>
        <input type="password" name="pswd" placeholder="Password" required=""/>
        <button>Login</button>
    </form>
            </div>
            </div>
  )
}

export default login