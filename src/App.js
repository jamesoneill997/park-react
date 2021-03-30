import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'

function App() {
  return (
      <React.Fragment>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
            </Switch>
        </Router>
      </React.Fragment>
  )
}

export default App;
