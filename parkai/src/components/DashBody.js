import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './DashBody.css';

export default class DashBody extends React.Component{
  constructor(props){
      super(props)
  }

   render(){

    return (
    <div className="body-container">
        <h1>{this.props.title} {this.props.name}</h1>
        {this.props.children}
    </div>
  )}
}

