import React from 'react'
import AdminDashBar from '../AdminDashBar'
import DashBody from '../DashBody'
import Reports from '../Reports'


export default class AdminDashReports extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
    return(
        <React.Fragment>
        <AdminDashBar></AdminDashBar>
            <DashBody title={"Reports"} >
                <Reports></Reports>
            </DashBody>
        </React.Fragment>
    )}
}