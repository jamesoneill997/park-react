import React from 'react'
import DashBar from '../DashBar'
import DashBody from '../DashBody'
import '../UserDashAccount.css'
import AccountWidget from '../AccountWidget'
import EditDetails from '../EditDetails'



export default class UserDashAccount extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){
    return(
        <React.Fragment>
        <DashBar></DashBar>
        <DashBody title={"Manage Account"} >
        <AccountWidget></AccountWidget>
        </DashBody>
        </React.Fragment>
    )}
}