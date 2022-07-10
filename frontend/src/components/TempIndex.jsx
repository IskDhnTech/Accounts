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
    let d1=a.date_of_submission,d2=b.date_of_submission;
    d1 = d1.split('/');
    d2 = d2.split('/');

    let t1=a.time_of_submission,t2=b.time_of_submission;
    t1 = t1.split(':');
    t2 = t2.split(':');

    return d2[2] - d1[2] || d2[1] - d1[1] ||  d2[0] - d1[0] || t2[2] - t1[2] || t2[1] - t1[1] ||  t2[0] - t1[0] || a.name.localeCompare(b.name);
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
            date_of_submission={data.date_of_submission}
            time_of_submission={data.time_of_submission}

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
