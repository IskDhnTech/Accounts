import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom'  
import HodResponse from './pages/hod_response';
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className="App">
     {/* <HodResponse/> */}
     <Dashboard/>

    </div>
  );
}

export default App;
