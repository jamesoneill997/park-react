import React, { Component } from 'react';
import './UserMap.css'
import './Reports.css'

export default class Reports extends Component {
    constructor(props){
        super(props)
    }

    state = {
        user:{},
        editing:false
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
    
    render() {
        return (
            <div id="report-body">
                <h2>Revenue This Month:</h2> 
                <h2>{this.state.user.accountBalance}</h2>
                <h2>Revenue This Week:</h2>
                <h2>{this.state.user.accountBalance}</h2>

            </div>
        );
    }
}