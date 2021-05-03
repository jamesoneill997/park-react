import React from 'react'
import DashBar from '../DashBar'
import DashBody from '../DashBody'
import GarageWidget from '../GarageWidget'


export default class UserDashGarage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
    return(
        <React.Fragment>
        <DashBar></DashBar>
        <DashBody title={"Garage"} >
        <GarageWidget></GarageWidget>
        </DashBody>
        </React.Fragment>
    )}
}