import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import SignIn from './components/pages/SignIn'

function App() {
  return (
      <React.Fragment>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signup' exact component={Signup}/>
                <Route path='/signin' exact component={SignIn}/>

            </Switch>
        </Router>
      </React.Fragment>
  )
}

export default App;
