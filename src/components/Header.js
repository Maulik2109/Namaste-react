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
 
        return (
        <div className="header"> 
         <Title/>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
         </div> 
        );
      };

    export default Header;