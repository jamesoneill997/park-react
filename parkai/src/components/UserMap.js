import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './UserMap.css'
import SearchBar from './SearchBar'
import Marker from './Marker'
import Geocode from "react-geocode";

 
export default class UserMap extends Component {
    static defaultProps = {
        center: {
        lat: 53.2734,
        lng: -7.77832031
        },
        zoom: 7
    };

    state = {
        coordinates: this.props.coordinates
    }

    constructor(props){
        super(props)
    }

    componentDidMount(){
        // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
        Geocode.setApiKey("AIzaSyDpy-LTrTOWbjdLJ4R4n1JtFJSFnWWLEJY");

        Geocode.setLanguage("en");

        Geocode.setRegion("ie");
    }
      

  render() {
    const Marker = props => {
        return <div className="SuperAwesomePin"></div>
      }
    return (
      <div style={{ height: '500px', width: '900px' }} className="map">
        <SearchBar/>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDpy-LTrTOWbjdLJ4R4n1JtFJSFnWWLEJY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <div 
            title={"COOL"}
            name={'SOMA'}
            lat={53.3853859} 
            lng={-6.265198600000001}
        
        />

        </GoogleMapReact>
      </div>
    );
  }
}