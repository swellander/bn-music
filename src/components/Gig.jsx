import React from 'react';
import PropTypes from 'prop-types';

function Gig(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>Location: {props.location}</p>
            <hr/>
        </div>
    );
}

Gig.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string
};

export default Gig;