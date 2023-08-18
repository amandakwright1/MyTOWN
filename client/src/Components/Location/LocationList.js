import React, { useState, useEffect } from "react";
import { getAllLocations } from "../../APIManagers/LocationManager";
import { Location } from "./Location";
import { useNavigate } from "react-router-dom";
import {Container, Row, Col } from "reactstrap";
import "./Location.css"

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
    
    <Container >
      <Row className= "box">
      {location.map((event) => {
        return <Col><Location key={location.id} location={event} /></Col>
     
        
         
      })}
      </Row>
    </Container>
    
  </>
  );
};

export default LocationList;



