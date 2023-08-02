import { Routes, Route, Navigate} from "react-router-dom";
import  EventList  from "./EventList";
import { EventForm }  from "./EventForm";
import EditEvent from "./EventEdit";
// import PostDetails from "./PostDetails"; leaving this here in case I decide to make eventdetails

const ApplicationViews = () => {

return (
     <Routes>
     
        <Route path="/" element= {<EventList />} />
        
        <Route path="/events/add" element={<EventForm />} />
        
        {/* <Route path="/category/delete/:categoryId" element={<DeleteCategory />} /> */}

      <Route path="/event/edit/:categoryId" element={<EditEvent />} />
                
        {/* <Route path="*" element={<p>Whoops, nothing here...</p>} /> can use this to link to a details type page later if wanted.*/}
     
     </Routes>
    
    )
  

};

export default ApplicationViews;
