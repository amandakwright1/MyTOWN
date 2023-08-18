import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";


export const Events = ({ events }) => {

  const navigate = useNavigate();



  return (
  <>
    <div className="events-container">
   
       <Card style={{ width: '200px', margin: '10px' }}>
       <CardBody>
      <h1 className="text-left px-2">{events.date}</h1>
      
        
         
          <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{events.description}</p>
        
        
        <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{events.time}</p>
        <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{events.address}</p>
        <p style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{events.contact}</p>
      </CardBody>
      <br></br>
  <div>
  <Button
            color="success"
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
  
    </div>
    
   
    </>
  );
  }
 