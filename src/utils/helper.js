export function filterdata(searchInput, restarunts){
  
    const filterdata= restarunts.filter((restarunt)=>
     restarunt.info.name.includes(searchInput))
     return filterdata;
     
}