import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'
export default props => {
  return (
    <>
<div class="sidebar">
  <a class="active" href="#pending">Pending</a>
  <a href="#queried">Queried</a>
  <a href="#approved">Approved</a>
  <a href="#paid">Paid</a>
  <a href="#settled">Settled</a>
  <a href="#printed">Printed&filed</a>

</div>

</>
  );
};