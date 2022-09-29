import React from 'react';
import {Link} from "react-router-dom";
 
function Sidebar() {
  return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav m-2">
            <li className="sidebar-brand my-2">

              <img src={process.env.PUBLIC_URL + '/gambar/logo.png'} alt="Logo" width="170px" height="auto"/>
            </li>

            <li className="nav-item">
                <Link to="/" className="link-dark">
                    <i className="sidebar fa-solid fa-house"></i> Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/master" className="link-dark">
                    <i className="sidebar fa-solid fa-database"></i> Master Ruas
                </Link>
            </li>
{/*            <li className="nav-item">
                <Link to="/about" className="link-dark">
                    <i className="fa-solid fa-address-card"></i> About
                </Link>
            </li>*/}
        </ul>
      </div>
    );
}
 
export default Sidebar;