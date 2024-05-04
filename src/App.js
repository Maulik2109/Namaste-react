import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { RouterProvider, createBrowserRouter , Outlet} from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestaruntMenu";
import Profile from "./components/Profile";

   const AppLayout= ()=>{
    return(
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
    );
    };


   const appRouter= createBrowserRouter([
     {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children: [
        {
          path:"/",
          element:<Body/>,
         },
        {
          path:"/about",
          element:<About/>,
          children:[
            {
            path:"profile",
            element:<Profile/>,
            },
          ],
         },
         {
          path:"/contact",
          element:<Contact/>,
         },
         {
          path:"/restarunt/:id",
          element:<RestrauntMenu/>,
         },
      ],
     },
   ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(<RouterProvider router={appRouter}/>);

  
 
  
/**
         * Header
         *  -Logo
         *  -NavItems(RightSide)
         *  -Cart
         * Body
         *  -SearchBar
         *  -RestaruntList
         *   -RestaruntCard
         *     -Image
         *     -Name
         *     -Rating
         *     -Cusines
         *  Footer
         *   -Links
         *   -Copyright
         */
 
  
  
  
  