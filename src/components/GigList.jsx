import React from 'react';
import PropTypes from 'prop-types';
import Gig from './Gig';
import Header from './Header';

function GigList(props) {

    return (
        <div>
            <Header />
            <h1>Upcoming Gigs</h1>
            <hr/>
            <br/>
            <br/>
            <br/>
            {Object.keys(props.gigList).map(function(gigId) {
                let gig = props.gigList[gigId];
                return <Gig 
                    onGigDetail={props.onGigDetail}
                    location={gig.location}
                    name={gig.name}
                    key={gigId} 
                    id={gigId}/>;
            })}
        </div>
    );
}

GigList.propTypes = {
    onNewGigRequest: PropTypes.func,
    gigList: PropTypes.object
};

export default GigList;