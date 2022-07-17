import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HodResponse from "./pages/hod_response";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Signup from "./components/Signup";
import Login from './components/Login.jsx'
import SuccessAlert from "./components/SuccessAlert";


function App() {
  console.log();
  return (
    <div  className="App">
    <HodResponse/>
    
        {/* <Dashboard/> */}
        {<Router>
            <Routes>
               
                <Route path="/login" element={ <Login/>} />
                <Route path="/dashboard" element={ <Dashboard/>} /> 
                <Route path="/submitted" element={ <SuccessAlert/>} />
            </Routes>
        </Router>}
      </div>
     
  );
}

export default App;
