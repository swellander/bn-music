import React from 'react';
import GigList from './GigList';
import GigDetail from './GigDetail';

function GigControl(props) {
    let currentlyVisibleComponent = null;
    if (props.detailVisibleOnPage) {
        currentlyVisibleComponent = <GigDetail />
    } else {
        currentlyVisibleComponent = <GigList gigList={props.gigList} onGigDetail={this.handleGigDetail}/>;
    }
    return (
        <div>
            {currentlyVisibleComponent}
        </div>
    );
}


export default GigControl;