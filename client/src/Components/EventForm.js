import { useState } from "react"
import { addEvent } from "../APIManagers/EventManager";
import { useNavigate } from "react-router-dom";


 export const EventForm = () => {

    const [newEvent, update] = useState({
        Date: "",
        Time: "",
        Description: "",
        Address: "",
        Contact: "",
        userProfileId: 1,
        
    })

    const navigate = useNavigate();

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        const eventToSendToAPI = {
            Date: newEvent.Date,
            Time: newEvent.Time,
            Description: newEvent.Description,
            Address: newEvent.Address,
            Contact: newEvent.Contact,
            UserProfileId: 1,
        };

        return addEvent(eventToSendToAPI)
                .then(navigate("/")); //takes user back to home route
    };

    return (
        <form className="event-form">
            <h2 className="event-form-title">Add New Event</h2>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="date">Date(MMDDYYYY):</label>
                        <input
                            type="text"
                            id="date"
                            value={newEvent.Date}
                            onChange={
                                (event) => {
                                    const copy = { ...newEvent }
                                    copy.Date = event.target.value
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
                            value={newEvent.Time}
                            onChange={
                                (event) => {
                                    const copy = { ...newEvent }
                                    copy.Time = event.target.value
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
                            value={newEvent.Description}
                            onChange={
                                (event) => {
                                    const copy = { ...newEvent }
                                    copy.Description = event.target.value
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
                            value={newEvent.Address}
                            onChange={
                                (event) => {
                                    const copy = { ...newEvent }
                                    copy.Address = event.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="contact">Contact Number:</label>
                        <input
                            type="text"
                            id="contact"
                            value={newEvent.Contact}
                            onChange={
                                (event) => {
                                    const copy = { ...newEvent }
                                    copy.Contact = event.target.value
                                    update(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">Add Event</button>
        </form>
    );
};
