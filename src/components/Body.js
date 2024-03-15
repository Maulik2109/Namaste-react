import{restaruntList} from "../constants";
import RestaruntCard from "./RestaruntCard";
import { useState, useEffect } from "react";

function filterdata(searchInput, restarunts){
  
  const filterdata= restarunts.filter((restarunt)=>
   restarunt.info.name.includes(searchInput))

   return filterdata;
   

}

const Body=()=>{
 const [restarunts, setRestraunts]=useState(restaruntList); 
 const [searchInput, setSearchInput]=useState();

 useEffect(()=>{
  getRestraunts();
  },[]);

async function getRestraunts(){
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json= await data.json();
  console.log(json);
  setRestraunts(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
}


console.log("render");

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

  