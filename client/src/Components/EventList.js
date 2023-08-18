import React, { useState, useEffect } from "react";
import { getAllEvents } from "../APIManagers/EventManager";
import { Events } from "./Events";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {Container, Row, Col } from "reactstrap";


const EventList = () => {
  const [events, setEvents] = useState([]);

  const getEvents = () => {
    getAllEvents().then(allEvents => setEvents(allEvents)); 
  };

  const navigate = useNavigate();

  useEffect(() => {
    getEvents();
  }, []); 

  const create = (e) => {
    navigate("/events/add")
  }


  return (  
    <>
    <p></p>
       <div className="add-button">
      
    <Button color="success" onClick={create}>
      Add Event
    </Button>
  </div>
    <Container>
    <Row sm = "3">
      {events.map((event) => {
        return <Col><Events key={events.id} events={event} /></Col>
         
        
         
      })}
</Row>
      </Container>
    
   
  </>
  );
};

export default EventList;