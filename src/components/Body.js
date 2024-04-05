import{restaruntList} from "../constants";
import RestaruntCard from "./RestaruntCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

function filterdata(searchInput, restarunts){
  
  const filterdata= restarunts.filter((restarunt)=>
   restarunt.info.name.includes(searchInput))
   return filterdata;
   
}

const Body=()=>{
 const [allRestraunts, setAllRestraunts]=useState([]); 
 const [filteredRestraunts, setFilteredRestraunts]=useState([]); 
 const [searchInput, setSearchInput]=useState();

 useEffect(()=>{
  getRestraunts();
  },[]);

async function getRestraunts(){
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json= await data.json();
  console.log(json);
  setAllRestraunts(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  setFilteredRestraunts(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
}

console.log("render");

 return allRestraunts.length===0?
   (<Shimmer/>) :
  (
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
          const data=filterdata(searchInput, allRestraunts);
          setFilteredRestraunts(data);
       }}
       >Search
       </button> 
       
      </div>
    <div className="restarunt-list">
      {
        filteredRestraunts.map(restarunt =>{
           return <RestaruntCard {...restarunt.info}/>
        })
      }
    </div>
    </>
      );
    };

    export default Body;

  