import React from "react";
import Templates from "./Templates";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
//import { useContext } from "react";
//import { useEffect } from "react";
//import TempDataContext from "../Context/TempDataContext";
import tempDataArr from "../TempDataArr";
import './TempIndex.css'

export default function TempIndex() {
    
  
  tempDataArr.sort(function(a, b) { 
    return b.payslip_no - a.payslip_no  ||  a.name.localeCompare(b.name);
  });

  return (

   

    <>


      {/* <MDBBtn onClick={()=>{setShowShow(!showShow)}}>Button</MDBBtn>
      <MDBCollapse show={setShowShow} >
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </MDBCollapse> */}



      {tempDataArr.map((data) => {
        return (
          <Templates
            name={data.name}
            payslip_no={data.payslip_no}
            email_id={data.email_id}
            mobile_no={data.mobile_no}
            department={data.department}
            total_amount={data.total_amount}
            payment_mode={data.payment_mode}
            cost_centre={data.cost_centre}
            hod={data.hod}
            ifsc_code={data.ifsc_code}
            account_no={data.account_no}
            details_of_items={data.details_of_items}

            // imgsrc={data.photos}
            // title={data.propertyName}
            // address={data.city}
            // bhk={data.bedrooms}
            // price={data.price}
          />
        );
      })}
    </>
  );
}
//export default TempIndex;
