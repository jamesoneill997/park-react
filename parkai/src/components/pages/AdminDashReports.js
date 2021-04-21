import React from 'react'
import AdminDashBar from '../AdminDashBar'
import DashBody from '../DashBody'


export default class AdminDashReports extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
    return(
        <React.Fragment>
        <AdminDashBar></AdminDashBar>
        <DashBody title={"Reports"} ></DashBody>
        </React.Fragment>
    )}
}