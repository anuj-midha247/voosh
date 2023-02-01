import React from 'react';
import './signup.css';

const signuplogin = () => {
  return (
    <div class="main">  	
    <input type="checkbox" id="chk" aria-hidden="true"/>

        <div class="signup">
            <form>
                <label for="chk" aria-hidden="true">Sign up</label>
                <input type="text" name="txt" placeholder="User name" required=""/>
                <input type="phone" name="email" placeholder="Phone" required=""/>
                <input type="password" name="pswd" placeholder="Password" required=""/>
                <button>Sign up</button>
            </form>
        </div>

        
</div>
  )
}

export default signuplogin