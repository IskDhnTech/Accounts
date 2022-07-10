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
  const [buttonsIndex, setButtonsIndex] = useState([1,0,0,0,0,0]);

  
  const handleClick=(ind)=>{
    let arr=new Array(6).fill(0);
    arr[ind]=1;
    console.log("butt")
    setButtonsIndex(arr);
    let req;
    if(ind==0) req="pending"
    else if(ind==1) req="queried"
    else if(ind==2) req="approved"
    else if(ind==3) req="paid"
    else if(ind==4) req="settled"
    else if(ind==5) req="printedfiled"
    console.log(req)
    setRequest(req);
  };
  //const[buttonColor, setbutton] =useState("green")

//   function handleColorChange(e) {
//   const newColor = buttonColor === "green" ? "yellow" : "green";
  
// e.target.style.backgroundColor = newColor;

//   }

  // useEffect(() => {
  //   <Dashboard/>
  // },[status]);

  //console.log(status)
  //console.log("nn")
  
  
  return (
    <>
  
<h1 className="text-success dashboard-header"> Welcome to ISKCON Accounts Dashboard </h1>


<div class="sidebar"  >
  <button type="button" className ="btn btn-warning" style={{ 'background-color': buttonsIndex[0]  ? "green" : "#90ee90" }} onClick={()=>{handleClick(0)}} >Pending</button>
  <button className ="btn btn-warning" style={{ 'background-color': buttonsIndex[1]  ? "green" : "#90ee90" }} onClick={()=>{handleClick(1)}} >Queried</button>
  <button className ="btn btn-warning" style={{ 'background-color': buttonsIndex[2]  ? "green" : "#90ee90" }} onClick={()=>{handleClick(2)} }>Approved</button>
  <button className ="btn btn-warning" style={{ 'background-color': buttonsIndex[3]  ? "green" : "#90ee90" }} onClick={()=>{handleClick(3)}} >Paid</button>
  <button className ="btn btn-warning" style={{ 'background-color': buttonsIndex[4]  ? "green" : "#90ee90" }} onClick={()=>{handleClick(4)}} >Settled</button>
  <button className ="btn btn-warning" style={{ 'background-color': buttonsIndex[5]  ? "green" : "#90ee90" }} onClick={()=>{handleClick(5)}} >Printed&filed</button>
</div>
{/* {console.log("ram")}  */}

{/* {console.log(request)} */}
{request=="pending" ? <Pending/> :<></>}
{request=="queried" ?<Queried/>:<></>}
{request=="approved" ?<Approved/>:<></>}
{request=="settled" ?<Settled/>:<></>}
{request=="paid" ?<Paid/>:<></>}
{request=="printedfiled" ?<PrintedFiled/>:<></>}


</>
  );
};