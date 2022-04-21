import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            
        <Link className="navbar-brand ps-3" to="index.html">SLR Parking System</Link>
            
        <div className="navbar-nav ms-auto">
            <h5 className="nav-link" style={{paddingTop:'0.3125rem',paddingBottom:'0.3125rem'}}>Cashier's Name</h5> 
            <Link className="nav-link" style={{paddingTop:'0.3125rem',paddingBottom:'0.3125rem'}} to="#" role="button"><i className="fas fa-sign-out fa-fw"></i></Link>
        </div>
    </nav>
    );
}

export default Navbar;