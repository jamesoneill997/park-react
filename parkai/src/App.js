import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Signup from './components/pages/Signup'
import SignIn from './components/pages/SignIn'
import UserDashHome from './components/pages/UserDashHome'
import UserDashParking from './components/pages/UserDashParking'
import UserDashGarage from './components/pages/UserDashGarage'
import UserDashAccount from './components/pages/UserDashAccount'
import UserDashTopup from './components/pages/UserDashTopup'

import AdminDashHome from './components/pages/AdminDashHome'
import AdminDashReports from './components/pages/AdminDashReports'
import AdminDashCarParks from './components/pages/AdminDashCarParks'
import AdminDashAccount from './components/pages/AdminDashAccount'
import AdminDashWithdraw from './components/pages/AdminDashWithdraw'


export default class App extends React.Component {
    constructor(){
        super()
        this.state = {
            loggedIn:false,
        }
    }

    render(){
  return (
      <React.Fragment>
        <Router>
            <Switch>
            <Route path='/user/dashboard/home' 
            exact 
            render={props=>(
                <UserDashHome {... props} loggedIn = {this.state.loggedIn} />
            )}/>
            <Route path='/user/dashboard/parking' 
            exact 
            render={props=>(
                <UserDashParking {... props} loggedIn = {this.state.loggedIn} />
            )}/>
            <Route path='/user/dashboard/garage' 
            exact 
            render={props=>(
                <UserDashGarage {... props} loggedIn = {this.state.loggedIn} />
            )}/>
            <Route path='/user/dashboard/topup' 
            exact 
            render={props=>(
                <UserDashTopup {... props} loggedIn = {this.state.loggedIn} />
            )}/>
            <Route path='/user/dashboard/account' 
            exact 
            render={props=>(
                <UserDashAccount {... props} loggedIn = {this.state.loggedIn} />
            )}/>


            <Route path='/admin/dashboard/home' 
            exact 
            render={props=>(
                <AdminDashHome {... props} loggedIn = {this.state.loggedIn} />
            )}/>
            <Route path='/admin/dashboard/reports' 
            exact 
            render={props=>(
                <AdminDashReports {... props} loggedIn = {this.state.loggedIn} />
            )}/>
            <Route path='/admin/dashboard/carparks' 
            exact 
            render={props=>(
                <AdminDashCarParks {... props} loggedIn = {this.state.loggedIn} />
            )}/>
            <Route path='/admin/dashboard/withdraw' 
            exact 
            render={props=>(
                <AdminDashWithdraw {... props} loggedIn = {this.state.loggedIn} />
            )}/>
            <Route path='/admin/dashboard/account' 
            exact 
            render={props=>(
                <AdminDashAccount {... props} loggedIn = {this.state.loggedIn} />
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

