import React from 'react'
import AdminDashBar from '../AdminDashBar'
import DashBody from '../DashBody'
import CarParkWidget from '../CarParkWidget'

export default class AdminDashCarParks extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
    return(
        <React.Fragment>
        <AdminDashBar></AdminDashBar>
        <DashBody title={"Carparks"} >
            <CarParkWidget></CarParkWidget>
        </DashBody>
        </React.Fragment>
    )}
}