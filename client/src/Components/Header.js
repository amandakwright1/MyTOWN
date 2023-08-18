import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"


const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-info justify-content-center">
      <Link to="/login" className="navbar-brand">
      <div class="logo">
       <MyLogo/>
       </div>
      </Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Events
          </Link>
        </li>  <li className="nav-item">
          <Link to="/parks" className="nav-link">
            Parks
          </Link>
        </li>  <li className="nav-item">
          <Link to="/restaurants" className="nav-link">
            Restaurants
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shops" className="nav-link">
            Shops
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/churches" className="nav-link">
            Churches
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Logout
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/events/add" className="nav-link">
            New Event
          </Link>
        </li> Leaving this here to use as example to link to other parts*/}
      </ul>
    </nav>
  );
};

export const MyLogo =()=> {

  return <img className="logo" src="/MyTOWNicon.jpg" alt="logo" />
      

   
}    





export default Header;