import React from 'react';

function OpeningTitle() {
    var styles = {
        margin: "auto",
        gridColumnStart: "1",
        gridRowStart: "2",
        fontSize: "1.6em",
        marginRight: "10vw",
        paddingTop: "20vh"
    }
    return (
        <div style={styles}>
            <div>
                <h1>BRANDON NELSON</h1>
            </div>
            <div>
               <p>Enter | Performances | Social Media</p>
            </div>
            
        </div>
    );
}

export default OpeningTitle;