import React from 'react'
import {Link} from 'react-router-dom'
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { AdminSidebarData } from './AdminSidebarData';
import './DashBar.css';
import { IconContext } from 'react-icons';

function AdminDashBar() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>

        <nav className='dash-menu active'>
          <ul className='dash-menu-items'>
            <li className='dashbar-toggle'>
            <img className='dash-logo' src={require("../assets/images/logo.png").default} alt='parkai-logo' />            </li>
            
            {AdminSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default AdminDashBar;