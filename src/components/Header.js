import { useState } from "react";
import {Link} from "react-router-dom";

const loggedInUser= ()=>{
  //Api call to authenticate user
  return false;
}

const Title=()=>(

    <h1 id="title" key="h2">
      <a href="/">
       <img 
       className="logo" 
       alt="logo" 
       src="https://img.freepik.com/premium-vector/mr-food-logo-design-template-vector_610482-309.jpg"/>
       </a>
      </h1>
    );

    const Header= () => {
 
      const[isLoggedIn,setIsLoggedIn]=useState(false);

        return (
        <div className="header"> 
         <Title></Title>
        <div className="nav-items">
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about"> About us</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
        {
          isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button>
          ):(
          <button onClick={()=>setIsLoggedIn(true)}>Login</button>)
        }
         </div> 
        );
      };

    export default Header;