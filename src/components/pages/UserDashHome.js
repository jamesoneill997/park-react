import React from 'react'


export default class UserDashHome extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
    return(
        <React.Fragment>
        {this.props.loggedIn ? "You are logged in": "You are not logged in"}
        </React.Fragment>
    )}
}