import React, { useState, useEffect } from "react";
import { getAllLocations } from "../../APIManagers/LocationManager";
import { Location } from "./Location";
import { useNavigate } from "react-router-dom";

const LocationList = () => {
  const [location, setLocation] = useState([]);

  const getLocation = () => {
    getAllLocations().then(allLocation => setLocation(allLocation)); 
  };

  // const navigate = useNavigate();

  useEffect(() => {
    getLocation();
  }, []); 



  return (  
    <>
    <div>
      {location.map((event) => {
        return <Location key={location.id} location={event} />
         
        
         
      })}
    </div>
    
  </>
  );
};

export default LocationList;