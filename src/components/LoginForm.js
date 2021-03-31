import React from 'react'
import './Form.css'


export const LoginForm =() => {

    const emailEl = React.useRef(null);
    const passwordEl = React.useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
    
        const data = {
            email: emailEl.current.value,
            password: passwordEl.current.value
        }
        
        fetch('https://parkapiv0.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        
            body: JSON.stringify(data)
        }).then(function(response){
            switch (response.status){
                case 200:
                    alert("Credentials are correct. Welcome back!")
                    return

                case 401:
                    alert("Credentials incorrect.")
                    return

                default:
                    alert("Unknown error, please contact support@parkai.com")
                    return
            }
        })
        
    }

    return (
        <form onSubmit={handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" ref={emailEl}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref={passwordEl}/>
                </div>

            
                <div className="button-container">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
            <div className="form-end">
                <p className="forgot-password text-right">
                    Don't have an Account? <a href="/signup">Sign up</a>
                    </p>
                </div>
            </form>
    )
}
