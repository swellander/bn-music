import React from 'react';
import Button from './Button';
import Social from './Social';


function OpeningTitle() {
    var styles = {
        margin: 'auto',
        gridColumnStart: '3',
        gridRowStart: '2',
        fontSize: '1.6em',
        marginRight: '6vw'
    };
    return (
        <div style={styles}>
            <div>
                <h1>BRANDON NELSON</h1>
            </div>
            <div>
                <Button to='/home' text="Enter" />
                <Button to='/gigs' text='Performances' />
            </div>
            <div>
                <Social/>
            </div>
            
        </div>
    );
}

export default OpeningTitle;