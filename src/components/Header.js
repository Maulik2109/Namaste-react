import { useState } from "react";

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
       src="https://c8.alamy.com/comp/2DDHAKD/restaurant-logo-design-mr-food-fork-and-tie-combination-2DDHAKD.jpg"/>
       </a>
      </h1>
    );

    const Header= () => {
 
      const[isLoggedIn,setIsLoggedIn]=useState(false);

        return (
        <div className="header"> 
         <Title></Title>
        <h1>Mr.Food</h1>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
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