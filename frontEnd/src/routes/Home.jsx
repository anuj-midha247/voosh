import { useContext } from "react";
import { Link } from "react-router-dom";

import './Home.css'

function Home() {


  return (
    <div className="home">
      <div>
      <Link to="/login">
        <h3 >Login Page</h3>
      </Link>
      </div>
      <div>
        
      <Link to="/get-order">
        <h3>Orders</h3>
        </Link>
      </div>
      
    </div>
  );
}
export default Home;
