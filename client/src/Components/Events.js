import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


export const Events = ({ events }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2"> Date: {events.date}</p>
      <CardBody>
        <p>
          {/* <Link to={`/events/${events.id}`}> can use this to link to a details type page later if wanted.*/}
          <>{events.description}</>
          {/* </Link> */}
        </p>
        <p>{events.time}</p>
        <p>{events.address}</p>
        <p>{events.contact}</p>
      </CardBody>
    </Card>
  );
};