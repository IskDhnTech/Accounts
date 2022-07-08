import React, { useEffect } from 'react';
import Sidebar from './Sidebar'
import './Dashboard.css'
import TempIndex from './TempIndex';
import Pending from './Pending';
import payment_status from '../Context/Payment_status';
import { useContext } from "react";
import Approved from './Approved';



export default function Dashboard() {

  const status=useContext(payment_status);

  useEffect(() => {
    <Dashboard/>
  },[status]);

  console.log(status)
  console.log("nn")
  return (
    <>
{console.log("ram")} 
<div class='dashboard-header'> Welcome to ISKCON Accounts Dashboard </div>
<Sidebar/>
<Pending/>
{console.log(status)}
{status=="approved" ?<Approved/>:<></>}
</>
  );
};