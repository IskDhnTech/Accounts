import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HodResponse from "./pages/hod_response";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  console.log();
  return (
    
      <div className="App">
        <Dashboard />
      </div>
     
  );
}

export default App;
