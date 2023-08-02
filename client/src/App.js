import React from "react";
import "./App.css";
import { BrowserRouter as Router} from 'react-router-dom'
import ApplicationViews from "./Components/ApplicationViews";
import Header from "./Components/Header";

function App() {
 return (
  <div className="App">
      <Router>
        <Header />
          <ApplicationViews />
      </Router>
    </div>
  );
}


export default App;
