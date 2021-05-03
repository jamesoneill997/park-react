import React from 'react'
import './CarParkWidget.css';

async function deleteCarPark(namespace){
    const response = await fetch('http://localhost:8080/carparks', {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"namespace" : namespace})
    })

    const data = await response.json()
    

    return data

}

const ListItem = ({ value }) => (
    <li className="carpark-container">
        Name: {value.name} <br/>
        Namespace: {value.namespace}<br/>
        Street: {value.location.street}<br/>
        Town: {value.location.town}<br/>
        County: {value.location.county}<br/>
        Cost Per Hour: {value.rules.cost}<br/>
        Minimum free stay: {value.rules.minStay}<br/>
        <button className="edit-button" >Edit Details</button>
        <form id="removal-form"><button className="removal-button" onClick={()=>{deleteCarPark(value.namespace)}}>Remove Carpark</button></form>
    </li>
  );
  
  const List = ({ items }) => (
    <ul>
      {
        items.map((item, i) => <ListItem key={i} value={item}/>)
      }
      <button className="add-button" disabled={items.length >= 3}>Add Carpark</button>
    </ul>
  );

export default class CarParkWidget extends React.Component{
    constructor(props){
        super(props)
        this.nameEl = React.createRef();
        this.namespaceEl = React.createRef();
        this.streetEl = React.createRef();
        this.cityEl = React.createRef();
        this.countyEl = React.createRef();
        this.costEl = React.createRef();
        this.minStayEl = React.createRef();
    }

    state = {
        carparks:[],
        editing: false
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:8080/carparks', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            })

        const data = await response.json()
        this.setState({carparks:data})

        return data
    }

    async addCarpark(){
        const data = {
            name: this.nameEl.current.value,
            namespace: this.namespaceEl.current.value,
            location: {
                street: this.streetEl.current.value,
                town: this.cityEl.current.value,
                County: this.countyEl.current.value
            },
            rules: {
                cost: parseInt(this.costEl.current.value,10),
                minStay: parseInt(this.minStayEl.current.value, 10)
            },
        }

        const response  = await  fetch('http://localhost:8080/carparks', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        
            body: JSON.stringify(data)
        })

        const d = await response.json()
        this.setState({editing: false})
        
        return
    }




    render(){
        return(
            <div id="carpark-area">
                {
                    this.state.carparks!= null ? 
                    <div>
                        <List items={this.state.carparks}>

                        </List> 

                        </div>
                        : 
                        <div id="empty">
                            You don't have any carparks yet, click the add button to add a carpark
                        {
                            this.state.editing==false?
                            <button className="add-button" onClick={()=>{this.setState({editing: true})}}>Add Carpark!</button>
                            :
                            <div>
                                <form id="carpark-add" onSubmit={()=>{this.addCarpark()}}>
                                    <div className="aform-group">
                                    <label>Name</label>
                                    <input id="name" type="text" className="form-control" placeholder="Carpark Name" ref={this.nameEl} required/>
                                    </div>

                                    <div className="aform-group">
                                    <label>Namespace (must be unique)</label>
                                    <input id="namespace" type="text" className="form-control" placeholder="Carpark Name" ref={this.namespaceEl} required/>
                                    </div>
                
                                    <div className="aform-group">
                                        <label>Location</label>
                                        <input id="street" type="text" className="form-control" placeholder="Street" ref={this.streetEl} required/>
                                        <input id="city" type="text" className="form-control" placeholder="City" ref={this.cityEl} required/>
                                        <input id="country" type="text" className="form-control" placeholder="Country" ref={this.countyEl} required/>
                                    </div>
                
                                    <div className="aform-group">
                                    <label>Rules</label>
                                        <input id="hourlyrate" type="text" className="form-control" placeholder="Cost per hour" ref={this.costEl} required/>
                                        <input id="minstay" type="text" className="form-control" placeholder="Minimum Free Stay (minutes)" ref={this.minStayEl} required/>
                                    </div>
                                    <button className="aadd-button" type="submit" >Save Changes!</button>

    
                                </form>
                                    </div>
                        }
                        </div>
                        
                }
            </div>
        )
    }
}