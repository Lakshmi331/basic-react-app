
import React from 'react'
import PropTypes from 'prop-types'
import UserDetails from './UserDetails'

function basic(props) {
  let name="Lakshmi"
  let num = "9876543210"
  let bool = true;
  let blueColor = false;
  let safeColor = false;

  let arr = [1,2,3,4,5,6,7,8];
  let strArray = ["Lakshmi","seenu","chakri","anu","raju","janu"];
  let arrObj = [{name: "Lakshmi",role: "Dev"},
                {name: "Seenu",role: "Doctor"},
                 {name: "Chakri",role: "manager"}
                ]

  return (
    <div>
    <div className="App">
      <h1 className={blueColor ? "header" : safeColor ? "safe" : "error"}>Heading</h1>
      <h1>{name}</h1>
      {
      bool ? <h3>{num}</h3> : <h3>No Number</h3>
      }
      {arr.map((value,index) => {
        return <h3>{value}</h3>
      })}
      {strArray.map((value,index) => {
        return <h3>{value}</h3>
      })}
      {arrObj.map((value,index) => {
        return <div className="user-item">
                <h3>Name: {value.name}</h3>
                <h3>Role: {value.role}</h3>
               </div>
      })}
      </div>
       
    </div>
  )
}

basic.propTypes = {

}

export default basic

