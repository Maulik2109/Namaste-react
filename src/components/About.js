import { Outlet } from "react-router-dom";

const About=()=>{
    return(
        <div>
            <h1>About us page</h1>
            <p>{" "}
            This is the about us page of Mr.Food
            </p>
            <Outlet/>
        </div>
    );
};

export default About;
