import React, { Component } from 'react';
import './UserMap.css'
import './Withdraw.css'
 

export default class Withdraw extends Component {
    constructor(props){
        super(props)
    }

    state = {
        amount: 0,
        user: {}
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

    async updateUser(){
        const response = await fetch('http://localhost:8080/users', {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state.user)
            })

            switch (response.status){
                case 409:
                    alert("Withdrawal not successful")
                    return
            }

        const data = await response.json()

        return 
    }

    async handleSubmit() {
        if (this.state.user.accountBalance == null){
            this.state.user.accountBalance = 0
            this.setState({user: this.state.user})
        }
        
        this.state.user.accountBalance += (this.props.amount/100)
        console.log(this.state.user.accountBalance)
        this.setState({user: this.state.user})
        await this.updateUser()
        alert("Withdrawal successful!")
        return

  };
    
    render() {
        return (
        <div id="withdraw-body" style={{ height: '500px', width: '900px' }}>
            <h2>Your Account Balance is: {this.props.user.accountBalance}</h2>
            <p className="form-label">Withdraw</p><input id="amount-input" onChange={(e)=>{this.setState({amount:e.target.value * -1})}}/>
            <button id="withdraw" onClick={async()=>{await this.handleSubmit()}}>Withdraw Funds</button>

        </div>
        );
    }
}