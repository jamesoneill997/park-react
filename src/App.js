import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import SignIn from './components/pages/SignIn'
import UserDashHome from './components/pages/UserDashHome'

function App() {
  return (
      <React.Fragment>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signup' exact component={Signup}/>
                <Route path='/signin' exact component={SignIn}/>
                <Route path='/dashboard' exact component={UserDashHome}/>

            </Switch>
        </Router>
      </React.Fragment>
  )
}

export default App;
