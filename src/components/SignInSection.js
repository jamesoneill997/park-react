import React from 'react'
import LoginForm from './LoginForm'
import '../App.css'
import './HomeSection.css'
import './LoginForm.css'
export default class SignInSection extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return (
        <div className='home-container'>
            <LoginForm handleLogin = {this.handleLogin}></LoginForm>
        </div>
    )}
}

