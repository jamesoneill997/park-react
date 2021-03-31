import React from 'react'
import './Form.css'

export const Form =() => {


        const firstNameEl = React.useRef(null);
        const surnameEl = React.useRef(null);
        const emailEl = React.useRef(null);
        const passwordEl = React.useRef(null);
        const typeEl = React.useRef(null);
        
        const handleSubmit = e => {
            e.preventDefault();
        
            const data = {
            firstName: firstNameEl.current.value,
            surname: surnameEl.current.value,
            type: typeEl.current.value,
            email: emailEl.current.value,
            password: passwordEl.current.value
            }
            
            fetch('https://parkapiv0.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            
                body: JSON.stringify(data)
            }).then(function(response){
                return response.json();
            })
            
        }
    
    return (
        <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" ref={firstNameEl}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" ref={surnameEl}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" ref={emailEl}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref={passwordEl}/>
                </div>

                <div className="form-group">
                    <label>I am a...</label>
                    <select name="type" id="type" ref={typeEl}>
                        <option disabled selected value> -- select an option -- </option>
                        <option value="admin">Car Owner</option>
                        <option value="user">Carpark Owner</option>
                    </select>

                </div>
                <div className="button-container">
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
            <div className="form-end">
                <p className="forgot-password text-right">
                    Already registered? <a href="/signin">Sign in</a>
                    </p>
                </div>
            </form>
    )
}


