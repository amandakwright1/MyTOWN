import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";


export const Location = ({ location }) => {



  return (
    <Card className="m-4">
      <p className="text-left px-2"> Name: {location.name}</p>
      <CardBody>
      <p>{location.imageUrl}</p>
        <p>
          {/* <Link to={`/events/${events.id}`}> can use this to link to a details type page later if wanted.*/}
          <>{location.address}</>
          {/* </Link> */}
        </p>
        <p>{location.phone}</p>
        <p>{location.website}</p>
      
      </CardBody>
      <br></br>
  
 
  
    </Card>
  );
};