import React from 'react';
import { Route, Routes,Link, BrowserRouter as Router } from 'react-router-dom';
import HodResponseCard_approved from "../components/hodResponseCard/hodResponseCard_approved";  
import HodResponseCard_queried from "../components/hodResponseCard/hodResponseCard_queried"; 
import EntranceCard from "../components/hodResponseCard/entranceCard" 

const hod_response = () => {
    return (
    <>
   {/* <h1 style={{color:"black"}}> hare krsna</h1> */}
   
        {<Router>
            <Routes>
                <Route path="/" element={<EntranceCard/>} />
                <Route path="/approved" element={<HodResponseCard_approved/>} />
                <Route path="/queried" element={<HodResponseCard_queried/>} /> 
            </Routes>
        </Router>}
        </>
    );
};

export default hod_response;