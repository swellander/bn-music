import React from 'react';
import PropTypes from 'prop-types';
import Gig from './Gig';
import Header from './Header';

function GigList(props) {

    return (
        <div>
            <Header />
            <h1>Upcoming Gigs</h1>
            <p>This part should only be visible to admin (Brandon)</p>
            <button onClick={props.onNewGigRequest}>Create A New Gig</button>
            <hr/>
            {props.gigList.map((gig) => 
                <Gig location={gig.location}
                    name={gig.name}
                    key={gig.id} 
                    id={gig.id}/>
            )}
        </div>
    );
}

GigList.propTypes = {
    onNewGigRequest: PropTypes.func,
    gigList: PropTypes.array
};

export default GigList;