import React from "react";
import Templates from './Templates';
// import tempData from './Tempdata.jsx';
//import { useContext } from "react";
//import { useEffect } from "react";
//import TempDataContext from "../Context/TempDataContext";
import tempDataArr from '../TempDataArr'


const TempIndex = () => {

    // const value=useContext(TempDataContext);
    // console.log("dd00");
    console.log(tempDataArr);
    return(
        <>
        
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
export default TempIndex;