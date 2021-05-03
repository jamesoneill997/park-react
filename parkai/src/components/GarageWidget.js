import React from 'react'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './GarageWidget.css'

export default class GarageWidget extends React.Component{
    constructor(){
        super()
        this.newReg = React.createRef();
    }

    state = {
        vehicles:[]
    }
    
    async componentDidMount(){
        const response = await fetch('http://localhost:8080/vehicles', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            })

        const data = await response.json()
        this.setState({vehicles:data})

        return data
    }

    handleAdd = async(event)=>{
        event.preventDefault()

        await fetch('http://localhost:8080/vehicles', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        
            body: JSON.stringify({"registration":this.newReg.current.value})
        })


        const response = await fetch('http://localhost:8080/vehicles', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            })

        const data = await response.json()
        this.setState({vehicles:data})

        return
    }

    handleDelete = async(reg)=>{
        await fetch('http://localhost:8080/vehicles', {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    
        body: JSON.stringify({"registration":reg})
    })

    
    return
    }
    

    render(){
        return(
            <div className='garage-body'>
                <h2>Your Vehicles</h2>
                {this.state.vehicles != undefined ?this.state.vehicles.map(
                    
                    (vehicle, index)=>{
                        return <li className='veh-text' key={index}>{vehicle.registration} <form id="veh-rem-form" onSubmit={()=>{this.handleDelete(vehicle.registration)}}><button type="submit" id="search-button"> Remove </button></form></li>
                    }) :

                    <p className="veh-text">You don't have any vehicles yet!</p>}
                <form id="veh-form" onSubmit={this.handleAdd}>
                <input  type="text" ref={this.newReg}></input>
                    <button id="search-button" type="submit">Add Carpark!</button>
                </form>
            </div>
       )
    }
}

