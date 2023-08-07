import  { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { getEventById, editEvent } from "../APIManagers/EventManager";
// import { CategoryContext } from "../../Managers/CategoryManager";
// import { Button, } from "reactstrap";




 const EditEvent = () => {
    const { eventsId } = useParams();
    const navigate = useNavigate();


 const [editedEvent, setEditedEvent] = useState({
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
            //    console.log(eventArray)
                setEditedEvent(eventArray)
            }
            );
        }, [eventsId])
        if (!editedEvent) {
            return null;
        }

        const handleSaveButtonClick = (e) => {
            e.preventDefault()
            
    const eventToEdit = {
        Id: parseInt(eventsId),
        Date: editedEvent.date,
        Time: editedEvent.time,
        Description: editedEvent.description,
        Address: editedEvent.address,
        Contact: editedEvent.contact,
        UserProfileId: 1,
    }

    return editEvent(eventToEdit)
    .then(() => {
        navigate(`/`)
    })
}


    //makes sure the new updates are saved and takes user back to event list.
    // const handleSaveButtonClick = (event) => {
    //     event.preventDefault()
    //     editEvent()
    //     .then(() => {
    //         navigate("/")
    //     })
    // }

    return (
        <form className="edit-form">
            <h2 className="edit-form-name">Edit your Event</h2>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <Input
                        className="edit-input"
                        type="text"
                        id="date"
                        value={editedEvent.date}
                           onChange={(evt) => {
                            const copy = { ...editedEvent }
                            copy.date = evt.target.value
                            setEditedEvent(copy)
                           }}
                           
                           
                             />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="time">Time:</label>
                        <Input
                            type="text"
                            id="time"
                            value={editedEvent.time}
                            onChange={
                                (evt) => {
                                    const copy = { ...editedEvent }
                                    copy.time = evt.target.value
                                    setEditedEvent(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <Input
                            type="text"
                            id="description"
                            value={editedEvent.description}
                            onChange={
                                (evt) => {
                                    const copy = { ...editedEvent }
                                    copy.description = evt.target.value
                                    setEditedEvent(copy)
                                }
                            } />
                    </div>
            </fieldset>
            <fieldset>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <Input
                            type="text"
                            id="address"
                            value={editedEvent.address}
                            onChange={
                                (evt) => {
                                    const copy = { ...editedEvent }
                                    copy.address = evt.target.value
                                    setEditedEvent(copy)
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
                            value={editedEvent.contact}
                            onChange={
                                (evt) => {
                                    const copy = { ...editedEvent }
                                    copy.contact = evt.target.value
                                    setEditedEvent(copy)
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



// const EditEventForm = () => {
//     const { updateEvent, getEventById } = useContext(CategoryContext);
//     const [event, setEvent] = useState({ //setEvent was update on mine.
//         Date: "",
//         Time: "",
//         Description: "",
//         Address: "",
//         Contact: "",
//         userProfileId: 1,
    
//     });

//     const { eventId } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         getEventById(eventId)
//         .then(responseEvent => {
//             if(responseEvent) {
//                 setEvent(responseEvent);
//             } else {
//                 setEvent({
//                     Date: "",
//                     Time: "",
//                     Description: "",
//                     Address: "",
//                     Contact: "",
//                     userProfileId: 1,
//                 });
//             }
//         });
//     }, []);
    

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const editedEvent = {
//             Date: event.Date,
//             Time: event.Time,
//             Description: event.Description,
//             Address: event.Address,
//             Contact: event.Contact,
//             userProfileId: 1,
//         };

//         updateEvent(editedEvent).then(() => {
//             navigate("/categories");
//         });
//     };

//     const handleFieldChange = evt => {
//         const stateToChange = { ...event };
//         stateToChange[evt.target.id] = evt.target.value;
//         setEvent(stateToChange);
//     }

//     const handleCancel = () => {
//         navigate("/");
//     }

//     return (
//         <Form onSubmit={handleSubmit}>
//             <h2 className="edit-form-name">Edit your Event</h2>
//             <fieldset>
//             <label htmlFor="date">Date:</label>
//                         <Input
//                             type="text"
//                             id="date"
//                           onChange={handleFieldChange}
//                            value={event.Date} required/>
                                
//             </fieldset>
//             <fieldset>
//                     <div className="form-group">
//                     <label htmlFor="time">Time:</label>
//                         <Input
//                             type="text"
//                             id="time"
//                           onChange={handleFieldChange}
//                            value={event.Time} required/>
//                     </div>
//             </fieldset>
//             <fieldset>
//                     <div className="form-group">
//                     <label htmlFor="description">Description:</label>
//                         <Input
//                             type="text"
//                             id="description"
//                           onChange={handleFieldChange}
//                            value={event.Description} required/>
//                     </div>
//             </fieldset>
//             <fieldset>
//                     <div className="form-group">
//                     <label htmlFor="address">Address:</label>
//                         <Input
//                             type="text"
//                             id="address"
//                           onChange={handleFieldChange}
//                            value={event.Address} required/>
//                     </div>
//             </fieldset>
//             <fieldset>
//                     <div className="form-group">
//                     <label htmlFor="contact">Contact:</label>
//                         <Input
//                             type="text"
//                             id="contact"
//                           onChange={handleFieldChange}
//                            value={event.Contact} required/>
//                     </div>
//             </fieldset>
           
//             <button
//             onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} className="btn btn-primary">Save</button>
//         </Form>
//     )}
// export default EditEventForm;