import React from 'react'
import './AccountWidget.css'

export default class AccountWidget extends React.Component{
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

        const data = await response.json()
        this.setState({user:data})

        return data
    }

    async handleFirstNameChange(e){
        var thisUser = {...this.state.user}
        thisUser.firstName = e.target.value
        this.setState({user: thisUser})
        return
    }

    async handleSurnameChange(e){
        var thisUser = {...this.state.user}
        thisUser.surname = e.target.value
        this.setState({user: thisUser})
        return
    }

    async handleEmailChange(e){
        var thisUser = {...this.state.user}
        thisUser.email = e.target.value
        this.setState({user: thisUser})
        return
    }

    async handlePasswordChange(e){
        var thisUser = {...this.state.user}
        thisUser.password = e.target.value
        this.setState({user: thisUser})
        return
    }

    render(){
        return(
            <div className='account-body'>
            {this.state.editing?
                <div className="details">
                <form id="edit-details-form">
                    <label>First Name: </label><input value={this.state.user.firstName} onChange={this.handleFirstNameChange.bind(this)}></input>
                    <label>Surname: {this.state.user?this.state.user.surname:" "}</label><input value={this.state.user.surname} onChange={this.handleSurnameChange.bind(this)}></input>
                    <label>Email: {this.state.user?this.state.user.email:" "}</label><input value={this.state.user.email} onChange={this.handleEmailChange.bind(this)}></input>
                    <label>Password:</label><input required type="password"  onChange={this.handlePasswordChange.bind(this)}></input>
                    <label>Vehicles: <a href="http://localhost:2000/user/dashboard/garage">View Vehicles</a></label>
                    <label>Account Balance: {this.state.user?(Math.round((this.state.user.accountBalance) * 100) / 100).toFixed(2):" "}</label>
                </form>
                <button onClick={
                    async()=>{this.setState(
                        {editing:false}
                        )     
                    await this.updateUser()
                    }}>Save Changes</button>
                </div>
            : 
            <div className="details">
                <h2>Your Account</h2>
                    <p>First Name:   {this.state.user?this.state.user.firstName:" "}</p> 
                    <p>Surname: {this.state.user?this.state.user.surname:" "}</p>
                    <p>Email: {this.state.user?this.state.user.email:" "}</p>
                    <p>Password: **********</p>
                    <p>Vehicles: <a href="http://localhost:2000/user/dashboard/garage">View Vehicles</a></p>
                    <p>Account Balance: {this.state.user?(Math.round((this.state.user.accountBalance) * 100) / 100).toFixed(2):" "}</p>
                <button onClick={()=>{this.setState({editing:true})}}>Edit Details</button>
            </div>
        }

        </div>
        )
    }
}