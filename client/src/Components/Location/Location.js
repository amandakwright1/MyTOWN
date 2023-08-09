import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";


export const Location = ({ location }) => {



  return (
    <Card className="m-4">
      <h1 className="text-left px-2"> Name: {location.name}</h1>
      <CardBody>
      <CardImg top src={location.imageUrl} alt={location.name} />
      {/* <p>{location.imageUrl}</p> */}
        <p>
          {/* <Link to={`/events/${events.id}`}> can use this to link to a details type page later if wanted.*/}
          <>{location.address}</>
          {/* </Link> */}
        </p>
        <p>{location.phone}</p> 
        <a href={location.website}>Link for more info!</a>
      
      
      </CardBody>
      <br></br>
  
 
  
    </Card>
  );
};