import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Button(props) {
    var styles = {
        backgroundColor: '#8E793E',
        marginRight: '1em'
    };
    return (
        <Link style={styles} to='/home' className="waves-effect waves-light btn">
            {props.text}
        </Link>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string
};

export default Button;