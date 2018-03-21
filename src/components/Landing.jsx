import React from 'react';
import OpeningTitle from './OpeningTitle';
import LandingPhoto from './../assets/images/landing.jpg';

function Landing() {
    var styles = {
        backgroundImage: `url('${LandingPhoto}')`,
        boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.2)',
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        color: 'white',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        alignItems: 'end'

    };
    return (
        <div style={styles}>
            <OpeningTitle/>
        </div>
    );
}

export default Landing;