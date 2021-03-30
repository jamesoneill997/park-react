import React from 'react'
import './Form.css'


export const LoginForm =() => {
    return (
        <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
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
