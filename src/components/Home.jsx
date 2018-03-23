import React from 'react';
import Header from './Header';
import HomePhoto from './../assets/images/home.jpg';
import Content from './Content';
import { Parallax } from 'react-materialize';


function Home() {
    var styles = {
        backgroundSize: "cover"
    }
    return (
        <div style={styles}>
            <Parallax imageSrc={HomePhoto}/>
            <Content />
            <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
        </div>
    );
}

export default Home;