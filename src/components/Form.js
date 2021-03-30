import React from 'react'
import './Form.css'


export const Form =() => {
    return (
        <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>I am a...</label>
                    <select name="type" id="type">
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
