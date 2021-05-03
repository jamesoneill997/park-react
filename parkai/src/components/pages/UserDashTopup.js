import React from 'react'
import DashBar from '../DashBar'
import DashBody from '../DashBody'
import Topup from '../Topup'
import '../Topup.css'


export default class UserDashTopup extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        amount:0,
        user:{}
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

        return data
    }


    render(){
    return(
        <React.Fragment>
        <DashBar></DashBar>
        <DashBody title={"Top Up"} >
            <p className="form-label">To add to Park.ai balance, enter the amount to top up by in the box below, <br/>click "Pay With Card" and then click "Add to park.ai balance"</p><input id="amount-input" onChange={(e)=>{this.setState({amount:e.target.value})}}/>
        <Topup id="topup-widget" amount={this.state.amount>0?this.state.amount*100:0} user={this.state.user!=null?this.state.user:{}}></Topup>
        </DashBody>
        </React.Fragment>
    )}
}