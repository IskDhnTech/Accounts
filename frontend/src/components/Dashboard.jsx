import React from 'react';
import Sidebar from './Sidebar'
import Dashboard from './Dashboard.css'
import TempIndex from './TempIndex';

export default props => {
  return (
    <>

    
<div class='dashboard-header'> Welcome to ISKCON Accounts Dashboard </div>

<Sidebar/>
<TempIndex/>
</>
  );
};