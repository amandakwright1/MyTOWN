import React, { useState, useEffect } from "react";
import { getAllLocations } from "../../APIManagers/LocationManager";
import { Location } from "./Location";
import { useNavigate } from "react-router-dom";

const LocationList = ({ LocationId }) => {
  const [location, setLocation] = useState([]);

  const getLocation = () => {
    getAllLocations().then(allLocation =>{
     const setLocations = allLocation.filter(x=>x.locationTypeId=== LocationId)
      setLocation(setLocations)
    } ); 
  };

  // const navigate = useNavigate();

  useEffect(() => {
    getLocation();
  }, [LocationId]); 
 



  return (  
    <>
    <div>
      {location.map((event) => {
        return <Location key={location.id} location={event} />
        // return <Location key={location.locationTypeId} location={event} />
        
         
      })}
    </div>
    
  </>
  );
};

export default LocationList;



