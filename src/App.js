import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import SignIn from './components/pages/SignIn'
import UserDashHome from './components/pages/UserDashHome'


export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            loggedIn:false,
            user: {}
        }
    }

    render(){
  return (
      <React.Fragment>
        <Router>
            <Switch>
            <Route path='/dashboard' exact 
            render={props=>(
                <UserDashHome {... props} loggedIn = {this.state.loggedIn} />
            )}/>
            <div>
            <Navbar/>

                <Route 
                path='/' 
                exact 
                render={props=>(
                    <Home {... props} loggedIn = {this.state.loggedIn} />
                )}
                />
                <Route path='/signup'             
                exact 
                render={props=>(
                    <Signup {... props} loggedIn = {this.state.loggedIn} />
                )}/>
                <Route path='/signin' 
                exact 
                render={props=>(
                    <SignIn {... props} loggedIn = {this.state.loggedIn} />
                )}/>
                </div>
            </Switch>
        </Router>
      </React.Fragment>
  )}
}

