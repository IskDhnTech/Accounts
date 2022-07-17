import React from "react";
import Templates from "./Templates";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
//import { useContext } from "react";
//import { useEffect } from "react";
//import TempDataContext from "../Context/TempDataContext";
import tempDataArr from "../TempDataArr";
import './TempIndex.css'

export default function TempIndex(props) {
    
  
  props.cardData.sort((a, b) => {
    return b.createdAt - a.createdAt;
  })
 

  return (

   

    <>


      {/* <MDBBtn onClick={()=>{setShowShow(!showShow)}}>Button</MDBBtn>
      <MDBCollapse show={setShowShow} >
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.
      </MDBCollapse> */}



      {props.cardData.map((data) => {
        return (
          <Templates
            name={data.name}
            payslip_no={data.payslip_id}
            email_id={data.email_id}
            mobile_no={data.phone}
            department={data.department}
            total_amount={data.amount}
            payment_mode={data.payment_mode}
            cost_centre={data.cost_center}
            hod={data.hod}
            ifsc_code={data.ifsc_code}
            account_no={data.account_no}
            details_of_items={data.details}
            date_of_submission={data.createdAt}
           

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
