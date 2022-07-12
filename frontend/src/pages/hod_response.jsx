import React,{useState,useEffect} from 'react';
import axios from "axios"
import { Route, Routes,Link, BrowserRouter as Router } from 'react-router-dom';
import HodResponseCard_approved from "../components/hodResponseCard/hodResponseCard_approved";  
import HodResponseCard_queried from "../components/hodResponseCard/hodResponseCard_queried"; 
import EntranceCard from "../components/hodResponseCard/entranceCard" 
import { formGroupClasses } from '@mui/material';

const Hod_response = () => {
    const [entry,setEntry] = useState()
    const [payslipData,setPayslipData]=useState()

    const fetchDetails=async(payslip_id)=>{
        const fetchDet=await axios.get(`http://localhost:8800/api/payslip/fetch_payslip/${payslip_id}`)
        if(fetchDet.data){
            setPayslipData(fetchDet.data)
            setEntry(true)
        }else{
            setEntry(false)
            alert("Some error occured.Please try again!")
        }
    }
   

    return (
    <>
   {/* <h1 style={{color:"black"}}> hare krsna</h1> */}
   
        {<Router>
            <Routes>
               
                <Route path="/approvalPage/:payslip_id" element={entry ? <HodResponseCard_approved payslipData={payslipData}/> : <EntranceCard fetchDetails={fetchDetails}/>} />
                <Route path="/queryPage/:payslip_id" element={entry ? <HodResponseCard_queried payslipData={payslipData} /> : <EntranceCard fetchDetails={fetchDetails}/>} /> 
            </Routes>
        </Router>}
        </>
    );
};

export default Hod_response;