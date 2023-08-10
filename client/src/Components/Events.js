import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";


export const Events = ({ events }) => {

  const navigate = useNavigate();

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
      <br></br>
  <div>
  <Button
            color="info"
            type="edit"
            onClick={() => navigate(`/events/edit/${events.id}`)}
            >
              Edit
            </Button>
          </div>
        <br></br>
          <Button
              color="danger"
              type="delete"
              onClick={() => navigate(`/events/delete/${events.id}`)}
              >
                Delete
              </Button>
  
    </Card>
  );
};