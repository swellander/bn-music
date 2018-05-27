import React from 'react';
import PropTypes from 'prop-types';

function Gig(props) {

    return (
        <div onClick={() => {props.onGigDetail(props.id);}}>
            <h3>{props.name}</h3>
            <p>Location: {props.location}</p>
            <hr/>
        </div>
    );
}

Gig.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    id: PropTypes.string
};

export default Gig;