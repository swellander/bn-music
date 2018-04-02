import React from 'react';
import PropTypes from 'prop-types';
import GigList from './GigList';
import GigDetail from './GigDetail';

function GigControl(props) {
    let currentlyVisibleComponent = null;
    if (props.detailVisibleOnPage) {
        currentlyVisibleComponent = <GigDetail selectedGig={props.selectedGig} hideGigDetail={props.hideGigDetail} />;
    } else {
        currentlyVisibleComponent = <GigList gigList={props.gigList} onGigDetail={props.onGigDetail} />;
    }
    return (
        <div>
            {currentlyVisibleComponent}
        </div>
    );
}

GigControl.propTypes = {
    detailVisibleOnPage: PropTypes.bool,
    gigList: PropTypes.object,
    handleGigDetail: PropTypes.func
}


export default GigControl;