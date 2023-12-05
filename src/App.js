import React  from "react";
import Home from "./Home";
import Add from "./components/Add";
import Complete from "./components/Complete";
import Cancel from "./components/Cancel";
import Side from "./Side";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div className="body">
        <Home />
        <div>
        <Routes>
          <Route path="/Side" element={<Side/>}/>
          <Route path="/components/Add" element={<Add/>}/>
          <Route path="/components/Complete" element={<Complete/>}/>
          <Route path="/components/Cancel" element={<Cancel/>}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
