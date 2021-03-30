import React from 'react'
import {LoginForm} from './LoginForm'
import {Button} from './Button'
import '../App.css'
import './HomeSection.css'
import './LoginForm.css'
function SignInSection() {
    return (
        <div className='home-container'>
            <LoginForm></LoginForm>
        </div>
    )
}

export default SignInSection
