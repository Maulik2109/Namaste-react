import{restaruntList} from "../constants";
import RestaruntCard from "./RestaruntCard";
import { useState } from "react";

function filterdata(searchInput, restarunts){
  
  const filterdata= restarunts.filter((restarunt)=>
   restarunt.info.name.includes(searchInput))

   return filterdata;

}

const Body=()=>{
  
 const [restarunts, setRestraunts]=useState(restaruntList); 
 const [searchInput, setSearchInput]=useState();

  return( 
      <>
      <div className="search-container">
       <input
         type="text"
         className="search-input"
         placeholder="Search"
         value={searchInput}
         onChange={(e)=>{
          setSearchInput(e.target.value)
         }}
       />
       <button 
       className="search-btn"
       onClick={()=>{
          const data=filterdata(searchInput, restarunts);
          setRestraunts(data);
       }}
       >Search
       </button> 
      </div>
    <div className="restarunt-list">
      {
        restarunts.map(restarunt =>{
           return <RestaruntCard {...restarunt.info}/>
        })
      }
    </div>
    </>
      );
    };

    export default Body;

  