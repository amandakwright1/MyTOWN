import { Routes, Route, Navigate} from "react-router-dom";
import  EventList  from "./EventList";
import { EventForm }  from "./EventForm";
import EditEvent from "./EventEdit";
import { DeleteEvent } from "./EventDelete";
import LocationList from "./Location/LocationList";

// import PostDetails from "./PostDetails"; leaving this here in case I decide to make eventdetails

const ApplicationViews = () => {

return (
     <Routes>
     
        <Route path="/" element= {<EventList />} />
        
        <Route path="/events/add" element={<EventForm />} />
        
        <Route path="/events/delete/:eventsId" element={<DeleteEvent />} />

      <Route path="/events/edit/:eventsId" element={<EditEvent />} />

      <Route path="/locations" element= {<LocationList />} />
                
      
     
     </Routes>
    
    )
  

};

export default ApplicationViews;
