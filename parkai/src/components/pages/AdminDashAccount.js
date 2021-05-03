import React from 'react'
import AdminDashBar from '../AdminDashBar'
import DashBody from '../DashBody'
import AdminAccountWidget from '../AdminAccountWidget'
import '../AccountWidget.css'


export default class AdminDashAccount extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){
    return(
        <React.Fragment>
        <AdminDashBar></AdminDashBar>
        <DashBody title={"Manage Account"} >
        <AdminAccountWidget></AdminAccountWidget>
        </DashBody>
        </React.Fragment>
    )}
}