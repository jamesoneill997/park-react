import React from 'react'
import DashBar from '../DashBar'
import DashBody from '../DashBody'
import UserMap from '../UserMap'


export default class UserDashParking extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
    return(
        <React.Fragment>
        <DashBar></DashBar>
        <DashBody title={"Parking"}>
        <UserMap/>

        </DashBody>
        
        </React.Fragment>
    )}
}