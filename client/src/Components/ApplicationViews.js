import { Routes, Route, Navigate} from "react-router-dom";
import  EventList  from "./EventList";
import { EventForm }  from "./EventForm";
import EditEvent from "./EventEdit";
import { DeleteEvent } from "./EventDelete";
import LocationList from "./Location/LocationList";
import Login from "./Login/Login";

// import PostDetails from "./PostDetails"; leaving this here in case I decide to make eventdetails

const ApplicationViews = () => {

return (
     <Routes>
         {/* <Route path="/login" element={Login } /> */}
        <Route exact path="/" element= {<EventList />} />
        
        <Route path="/events/add" element={<EventForm />} />
        
        <Route path="/events/delete/:eventsId" element={<DeleteEvent />} />

      <Route path="/events/edit/:eventsId" element={<EditEvent />} />

      <Route path="/parks" element= {<LocationList LocationId={1}/>} />
      <Route path="/restaurants" element= {<LocationList LocationId={2}/>} />
      <Route path="/shops" element= {<LocationList LocationId={3} />} />
      <Route path="/churches" element= {<LocationList  LocationId={4}/>} />
                
      
     
     </Routes>
    
    )
  

};

export default ApplicationViews;
