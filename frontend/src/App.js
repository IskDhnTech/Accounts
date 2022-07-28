import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HodResponse from "./pages/hod_response";
import Dashboard from "./pages/dashboard";
// import Sidebar from "./components/Sidebar";
// import Signup from "./components/Signup";
// import Login from './components/Login.jsx'
import SuccessAlert from "./components/SuccessAlert";


function App() {
  console.log();
  return (
    <div  className="App">
    {/* <HodResponse/> */}
    
        {/* <Dashboard/> */}
        {<Router>
            <Switch>
               
                {/* <Route  path="/login" element={ <Login/>} /> */}
                {/* <Route path="/dashboard" element={ <Dashboard/>} />  */}
                <Route  path="/dashboard">
                  <Dashboard/> 
                </Route>
                <Route exact path="/submitted" >
                <SuccessAlert/>
                </Route>
            </Switch>
        </Router>}
      </div>
     
  );
}

export default App;
