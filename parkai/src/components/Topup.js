import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import StripeCheckout from 'react-stripe-checkout';

import React from 'react'
import './Topup.css'


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51IHWOCFqx8UNc5STi3l8hCbxfdcQfrlqv9BlVrCbLH4kyauI3ANffkUZEPMl1uSO8u472WtNzDjj1bOCtPny0u8C00X08BYoR9");

export default class Topup extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
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
                    alert("Top up not successful")
                    return
            }

        const data = await response.json()

        return 
    }

    async handleSubmit() {
        this.state.user.accountBalance += (this.props.amount/100)
        this.setState({user:this.state.user})
        console.log(this.state.user)
        await this.updateUser()
        alert("Top up successful!")
        return

  };

  render() {
    const {stripe} = this.props;
    
    return (    
        <div>
      <StripeCheckout
        amount= {this.props.amount}
        email={this.props.user.email}
        name='Top up your account!'
        stripeKey = "pk_test_51IHWOCFqx8UNc5STi3l8hCbxfdcQfrlqv9BlVrCbLH4kyauI3ANffkUZEPMl1uSO8u472WtNzDjj1bOCtPny0u8C00X08BYoR9"
        currency="EUR"
      />
      <br/>
      <br/>
      <button onClick={async()=>{await this.handleSubmit()}}>Add to Park.AI balance</button>
      </div>

    );
  }
}