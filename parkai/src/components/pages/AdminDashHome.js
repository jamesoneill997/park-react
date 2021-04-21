import React from 'react'
import AdminDashBar from '../AdminDashBar'
import DashBody from '../DashBody'


export default class AdminDashHome extends React.Component{

    state = {
        user:null
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:8080/users', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            })

        const data = await response.json()
        this.setState({user:data})
        
    }

    render(){
        return(
        <React.Fragment>
        <AdminDashBar></AdminDashBar>

        {this.state.user?<DashBody title={"Welcome to Park.ai"} name={this.state.user.firstName}></DashBody>:<DashBody title={"Welcome to Park.ai"} name={":)"}></DashBody>}
        </React.Fragment>
    )}
}