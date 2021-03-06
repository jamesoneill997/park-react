import React from 'react'
import AdminDashBar from '../AdminDashBar'
import DashBody from '../DashBody'
import Withdraw from '../Withdraw'

export default class AdminDashWithdraw extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        amount: 0,
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
        this.state.user.accountBalance -= (this.props.amount/100)
        this.setState({user:this.state.user})
        console.log(this.state.user)
        await this.updateUser()
        alert("Top up successful!")
        return

  };

    render(){
    return(
        <React.Fragment>
        <AdminDashBar></AdminDashBar>
        <DashBody title={"Withdraw funds"} >
        <Withdraw user={this.state.user==undefined?{}:this.state.user}></Withdraw>
        </DashBody>
        </React.Fragment>
    )}
}
