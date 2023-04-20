import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Archive from './Pages/Archive';
import Campaign from './Pages/Campaign';
import Dashboard from './Pages/Dashboard';
import Hospitals from './Pages/Hospitals';
import Report from './Pages/Report';
import Setting from './Pages/Setting';
import './assets/css/App.css'

function App() {
  return (
    <>
      <Router>
        
        <Navbar />
        <Switch>
          <Route path="/" exact="true" component={Dashboard} />
          <Route path='/hospitals' component={Hospitals} />
          <Route path='/campaign' component={Campaign} />
          <Route path='/report' component={Report} />
          <Route path='/archive' component={Archive} />
          <Route path='/setting' component={Setting} />
        </Switch>
      </Router>
    </>
  )
}

export default App
