import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                <a href="#" className="brand-logo"><Link to='/'>BRANDON NELSON</Link></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Home</a></li>
                    <li><a href="badges.html">Music</a></li>
                    <li><a href="collapsible.html">About</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;