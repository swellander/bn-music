import React from 'react';
import SoundCloud from './SoundCloud';

function Content() {
    var styles = {
        height: '800px',
        backgroundColor: 'white'
    };
    return (
        <div style={styles}>
            <SoundCloud />
        </div>
        
    );
}

export default Content;