import React from 'react'
import './Navbar.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

function SearchBar() {
    return(
        <div className='search-bar'>
        <h2 className='search-title'> Find carparks near you!</h2>
            <input placeholder="Type location"></input>
            <button id="search-button">Search</button>
        </div>
    )
}

export default SearchBar
