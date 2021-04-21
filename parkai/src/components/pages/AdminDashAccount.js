import React from 'react'
import AdminDashBar from '../AdminDashBar'
import DashBody from '../DashBody'


export default class AdminDashAccount extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
    return(
        <React.Fragment>
        <AdminDashBar></AdminDashBar>
        <DashBody title={"Manage Account"} ></DashBody>
        </React.Fragment>
    )}
}