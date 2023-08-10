import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById, deleteEvent } from "../APIManagers/EventManager";
import { Button } from "reactstrap";

export const DeleteEvent = () => {

    const { eventsId } = useParams();
    const navigate = useNavigate();

    const [event, update] = useState({
        
        date: "",
        time: "",
        description: "",
        address: "",
        contact: "",
        userProfileId: 1,
    })

  

    useEffect(() => {
        getEventById(eventsId)
            .then((eventArray) => {
                update(eventArray)
            })
    }, [eventsId])

    const handleDelete = (e) => {
        e.preventDefault()
        deleteEvent(event.id)
            .then(() => {
                navigate("/")
            })
    }

    const handleNo = () => {
        navigate("/")
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">Delete Event</h2>

            <h3>Are you sure you want to delete {event.date}?</h3>

            <Button
                color="danger"
                type="delete"
                onClick={(clickEvent) => handleDelete(clickEvent)}
                >
                    Yes
                </Button>
            <Button
                color="primary"
                onClick={(clickEvent) => handleNo(clickEvent)}
                >
                    No
                </Button>
        </form>
    )
}