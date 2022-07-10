import React, { useEffect } from 'react';
import Sidebar from './Sidebar'
import './Dashboard.css'
import TempIndex from './TempIndex';
import payment_status from '../Context/Payment_status';
import { useContext } from "react";
import Pending from './Pending';
import Approved from './Approved';
import Queried from './Queried';
import Paid from './Paid';
import PrintedFiled from './PrintedFiled';
import Settled from './Settled'
import { useState } from 'react';
 
export default function Dashboard() {

//  const status=useContext(payment_status);
  const [request,setRequest]=useState("pending")
  const [favorite,setFavorite]=useState(false)
  const [stats,setStats]=useState(false)
  const[buttonColor, setbutton] =useState("green")

  function handleColorChange(e) {
  const newColor = buttonColor === "green" ? "yellow" : "green";
  
e.target.style.backgroundColor = newColor;

  }

  // useEffect(() => {
  //   <Dashboard/>
  // },[status]);

  //console.log(status)
  //console.log("nn")
  return (
    <>
  
<h1 className="text-success"> Welcome to ISKCON Accounts Dashboard </h1>

<div class="sidebar">
  <button className ="btn btn-warning" onClick={(handleColorChange)=>{setRequest("pending")}} >Pending</button>
  <button className ="btn btn-warning" onClick={()=>{setRequest("queried")}} >Queried</button>
  <button className ="btn btn-warning" onClick={(e)=>{setRequest("approved");handleColorChange(e);}}>Approved</button>
  <button className ="btn btn-warning" onClick={(e)=>{setRequest("paid");handleColorChange(e);}} >Paid</button>
  <button className ="btn btn-warning" onClick={()=>{setRequest("settled")}} >Settled</button>
  <button className ="btn btn-warning" onClick={()=>{setRequest("printedfiled")}} >Printed&filed</button>
</div>
{/* {console.log("ram")}  */}

{/* {console.log(request)} */}
{request=="pending" ?<Pending/>:<></>}
{request=="queried" ?<Queried/>:<></>}
{request=="approved" ?<Approved/>:<></>}
{request=="settled" ?<Settled/>:<></>}
{request=="paid" ?<Paid/>:<></>}
{request=="printedfiled" ?<PrintedFiled/>:<></>}
</>
  );
};