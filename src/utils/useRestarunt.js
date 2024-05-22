import { useEffect,useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestarunt=(id)=>{
    const[restarunt, setRestraunt]=useState(null);

    const[menu, setMenu]=useState(null);
    
    useEffect(()=>{
       getRestrauntInfo();
    },[]);

    async function getRestrauntInfo(){
       const data= await fetch(FETCH_MENU_URL+id);
       const json= await data.json();
       setRestraunt(json.data.cards[2].card.card.info);
       setMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR)
    }

    return {restarunt,menu};

};

export default useRestarunt;