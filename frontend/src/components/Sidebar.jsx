import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'
import {useState,useEffect} from "react"
import payment_status from '../Context/Payment_status';
import Dashboard from './Dashboard.css';
export default props => {

  const [request,setRequest]=useState("pending")

  // useEffect(() => {
  //   <Dashboard/>
  // },[request]);

  return (

    <payment_status.Provider value={request}>
      {props.children}
<div class="sidebar">
  <button onClick={()=>{setRequest("pending")}} class="active" >Pending</button>
  <button onClick={()=>{setRequest("queried")}} >Queried</button>
  <button onClick={()=>{setRequest("approved")}} >Approved</button>
  <button onClick={()=>{setRequest("paid")}} >Paid</button>
  <button onClick={()=>{setRequest("settled")}} >Settled</button>
  <button onClick={()=>{setRequest("printedfiled")}} >Printed&filed</button>
</div>
{console.log(request)}
</payment_status.Provider>

  );
};