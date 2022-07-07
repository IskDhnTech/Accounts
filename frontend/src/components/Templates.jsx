import React from "react";
import Templates from './Templates.css'

function Template(_props) {

  return (
    <>
      <div class="container card ">
        <div class="jumbotron">

        <br/>
        <h5> <b>Name</b> : {_props.name} </h5>
        <h5> <b>Payslip No. : </b>  {_props.payslip_no} </h5>
        <h5> <b> Email Id : </b> {_props.email_id} </h5>
        <h5> <b> Mobile no. : </b> {_props.mobile_no} </h5>
        <h5> <b> Department : </b> {_props.department} </h5>
        <h5> <b> Total amount </b>(in Rs.). : {_props.total_amount} </h5>
        <h5> <b> Mode of payment : </b> {_props.payment_mode} </h5>
        <h5> <b> Cost centre : </b> {_props.cost_centre} </h5>
        <h5> <b> HOD : </b> {_props.hod} </h5>
        <h5> <b> Details of items purchased : </b>{_props.details_of_items} </h5>
        {_props.ifsc_code!=-1? <h5> IFSC code : {_props.ifsc_code} </h5>:<h5></h5>}
        {_props.account_no!=-1? <h5> Bank Account No. : {_props.account_no} </h5>:<h5></h5>}
    <br/>
    <button type="button" class="btn btn-secondary butt" >Move to Paid</button>
    <button type="button" class="btn btn-secondary butt">Move to Settled</button>
    <button type="button" class="btn btn-secondary butt">Move to Printed&Filed</button>
        </div>
      </div>
    </>
  );
}

export default Template;
