import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById, editEvent } from "./Managers/EventManager";
import { Button } from "reactstrap";

export const EditEvent = () => {
    const [event, update] = useState({
        Date: "",
        Time: "",
        Description: "",
        Address: "",
        Contact: "",
        userProfileId: 1,
    })

    const { eventId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getEventById(eventId)
            .then((eventArray) => {
                update(eventArray)
            })
    }, []);

    //makes sure the new updates are saved and takes user back to event list.
    const handleSaveButtonClick = (e) => {
        e.preventDefault()
        editEvent(event)
        .then(() => {
            navigate("/event")
        })
    }

    return (
        <form className="edit-form">
            <h2 className="edit-form-name">Edit your Event</h2>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="text"
                            id="date"
                            value={event.Date}
                            onChange={
                                (e) => {
                                    const copy = { ...event }
                                    copy.Date = e.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="time">Time:</label>
                        <input
                            type="text"
                            id="time"
                            value={event.Time}
                            onChange={
                                (e) => {
                                    const copy = { ...event }
                                    copy.Name = e.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            value={event.Description}
                            onChange={
                                (e) => {
                                    const copy = { ...event }
                                    copy.Description = e.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            value={event.Address}
                            onChange={
                                (e) => {
                                    const copy = { ...event }
                                    copy.Address = e.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="contact">Contact:</label>
                        <input
                            type="text"
                            id="contact"
                            value={event.Contact}
                            onChange={
                                (e) => {
                                    const copy = { ...event }
                                    copy. Contact = e.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
           
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">Save</button>
        </form>
    );
};
export default EditEvent;