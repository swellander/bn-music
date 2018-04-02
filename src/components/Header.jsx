import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    var navStyles = {
        boxShadow: '0 !important',
        webkitBoxShadow: '0 !important'
    };
    return (
        <div>
            <nav style={navStyles}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo"><Link to='/'>BRANDON NELSON</Link></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/music'>Music</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/gigs'>Gigs</Link></li>

                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;