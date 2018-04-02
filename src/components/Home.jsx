import React from 'react';
import Header from './Header';
import HomePhoto from './../assets/images/home.jpg';
import Content from './Content';
require('./../assets/js/main.js');



function Home() {
    var styles = {
        backgroundSize: 'cover'
    };
    return (
        <div style={styles}>
            <Header />
            <div className="parallax-container">
                <div className="parallax">
                    <img src={HomePhoto}></img>
                </div>
            </div>
            <Content />
        </div>
    );
}

export default Home;