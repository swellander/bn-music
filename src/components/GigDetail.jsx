import React from 'react';
import PropTypes from 'prop-types';


function GigDetail(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <p>{props.date}</p>
            <p>{props.time}</p>
            <p>Google Map goes here</p>
        </div>
    );
}

GigDetail.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string
};

export default GigDetail;