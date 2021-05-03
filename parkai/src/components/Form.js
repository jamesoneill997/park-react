import React from 'react'
import './Form.css'
import Cookies from 'js-cookie'

class Form extends React.Component{
    constructor(props) {
        super(props);
        this.firstNameEl = React.createRef();
        this.surnameEl = React.createRef();
        this.emailEl = React.createRef();
        this.passwordEl = React.createRef();
        this.typeEl = React.createRef();

    }

    state = {
        isLoading : false
    }

    handleSubmit = (e) => {
        this.setState({isLoading:true})
        e.preventDefault();
    
        const data = {
            firstName: this.firstNameEl.current.value,
            surname: this.surnameEl.current.value,
            type: this.typeEl.current.value,
            email: this.emailEl.current.value,
            password: this.passwordEl.current.value,
            vehicles: [],
            carparks: []
        }
        
        fetch('https://parkapiv0.herokuapp.com/users', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        
            body: JSON.stringify(data)
        }).then((response)=>{
            this.setState({isLoading: false})

            switch (response.status){
                case 201:
                    alert("Sign up successful!")
                    fetch('http://localhost:8080/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        
            body: JSON.stringify(data)
        }).then((response)=>{
            
            this.setState({isLoading: false})

            switch (response.status){
                case 200:
                    console.log(response.text().then(function(data){
                        Cookies.set("ParkAIToken", data, {expires: 7, path:'/'})
                    }))
                    if(data.type == "user"){
                        this.props.history.push("/user/dashboard/home")
                    }else{
                        this.props.history.push("/admin/dashboard/home")
                    }
                    
                    return

                case 401:
                    alert("Invalid credentials")
                    return

                default:
                    alert("Unknown error, please contact support@parkai.com")
                    return
            }
        })


                    return

                case 409:
                    alert("User with that email address already exists")
                    return

                default:
                    alert("Unknown error, please contact support@parkai.com")
                    return
            }
        })
        
    }



    render(){

        const {isLoading} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input id="name" type="text" className="form-control" placeholder="First name" ref={this.firstNameEl} required/>
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input id="surname" type="text" className="form-control" placeholder="Last name" ref={this.surnameEl} required/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input id="email" type="email" className="form-control" placeholder="Enter email" ref={this.emailEl} required/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input id="password" type="password" className="form-control" placeholder="Enter password" ref={this.passwordEl} required/>
                    </div>

                    <div className="form-group">
                        <label>I am a...</label>
                        <select name="type" id="type" ref={this.typeEl}>
                            <option disabled selected value> -- select an option -- </option>
                            <option value="user">Car Owner</option>
                            <option value="admin">Carpark Owner</option>
                        </select>

                    </div>
                    <div className="button-container">
                        <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                        {isLoading && <i className="fa fa-refresh fa-spin"></i>}
                        Sign Up
                        </button>
                    </div>
                <div className="form-end">
                    <p className="forgot-password text-right">
                        Already registered? <a href="/signin">Sign in</a>
                        </p>
                    </div>
                </form>
        )}

}


export default Form