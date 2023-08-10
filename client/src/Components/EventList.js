import React, { useState, useEffect } from "react";
import { getAllEvents } from "../APIManagers/EventManager";
import { Events } from "./Events";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

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
    <div>
      {events.map((event) => {
        return <Events key={events.id} events={event} />
         
        
         
      })}
    </div>
    <div>
    <Button color="info" onClick={create}>
      Create Event
    </Button>
  </div>
  </>
  );
};

export default EventList;