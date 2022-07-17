import React from 'react';
import TempIndex from './TempIndex';
import './Pending.css'

export default (props) => {
  console.log({cardInfo:props.cardData})
  return (
    <>

		<div class="pending">List of all pending payment requests...</div>
   
	{props.cardData && 	<TempIndex cardData={props.cardData}/>}

</>
  );
};