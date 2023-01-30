import React from "react";
import './App.css';
import UserDetails from "./components/UserDetails";
import Children from "./components/Children";

function App(props) {

  return (
    <div>
       <UserDetails 
          data = {{
             name: "Lakshmi",
             role: "manager",
          }}
       />
       <Children>
        <h1>Child From Parent</h1>
        <p>Parent From Parent</p>
       </Children>

    </div>
  );
}

export default App;
