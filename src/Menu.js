import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className="navbar">
            <Link to="/about">About</Link>            
            <Link to="/contact">Contact</Link>
        </div>        
    )
}

export default Menu;
