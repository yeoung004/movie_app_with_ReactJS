import React from 'react';
import './Navigation.css';
import { Link  } from 'react-router-dom';

function Navigation() {
    return (
        <div className="nav">
            <Link to='/'>✔&nbsp;Home</Link>
            <Link to="/About">✔&nbsp;About</Link>
        </div>
    );
}

export default Navigation;