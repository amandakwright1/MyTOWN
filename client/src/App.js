import React, {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router} from 'react-router-dom'
import ApplicationViews from "./Components/ApplicationViews";
import Header from "./Components/Header";
import Authorize from "./Components/Login/Authorize";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);


  useEffect(() => {
      if (!localStorage.getItem("userProfile")) {
          setIsLoggedIn(false)

      }
  }, [isLoggedIn])



 return (
  <div className="App">
      <Router>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <ApplicationViews />
          
                <Authorize setIsLoggedIn={setIsLoggedIn} />
            
        </Router>
    </div>
  );
}


export default App;
