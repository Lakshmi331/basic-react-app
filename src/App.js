import React from "react";
import './App.css';
import UserDetails from "./components/UserDetails";
import Children from "./components/Children";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Basic from "./components/Basic";

function App(props) {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<UserDetails/>} />
            <Route path = "/Basic" element = {<Basic/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
