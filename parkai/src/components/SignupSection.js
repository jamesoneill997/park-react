import React from 'react'
import Form from './Form'
import '../App.css'
import './HomeSection.css'
import './Form.css'
import {useHistory} from "react-router-dom";


function SignupSection() {
    return (
        <div className='home-container'>
            <Form history={useHistory()}></Form>
        </div>
    )
}

export default SignupSection
