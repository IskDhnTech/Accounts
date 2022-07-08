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

  // useEffect(() => {
  //   <Dashboard/>
  // },[status]);

  //console.log(status)
  //console.log("nn")
  return (
    <>
<div class='dashboard-header'> Welcome to ISKCON Accounts Dashboard </div>

<div class="sidebar">
  <button onClick={()=>{setRequest("pending")}} class="active" >Pending</button>
  <button onClick={()=>{setRequest("queried")}} >Queried</button>
  <button onClick={()=>{setRequest("approved")}} >Approved</button>
  <button onClick={()=>{setRequest("paid")}} >Paid</button>
  <button onClick={()=>{setRequest("settled")}} >Settled</button>
  <button onClick={()=>{setRequest("printedfiled")}} >Printed&filed</button>
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