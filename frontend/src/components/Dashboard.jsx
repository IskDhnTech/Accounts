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


export default function Dashboard() {

  const status=useContext(payment_status);

  // useEffect(() => {
  //   <Dashboard/>
  // },[status]);

  console.log(status)
  console.log("nn")
  return (
    <>
{console.log("ram")} 
<div class='dashboard-header'> Welcome to ISKCON Accounts Dashboard </div>
<Sidebar/>
{console.log(status)}
{status=="pending" ?<Pending/>:<></>}
{status=="queried" ?<Queried/>:<></>}
{status=="approved" ?<Approved/>:<></>}
{status=="settled" ?<Settled/>:<></>}
{status=="paid" ?<Paid/>:<></>}
{status=="printedfiled" ?<PrintedFiled/>:<></>}
</>
  );
};