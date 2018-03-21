import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
    var name = `fa fa-${props.name}`;
    var styles = {
        marginRight: '1em'
    };
    return (
        <a href={props.link}>
            <i style={styles} className={name}></i>
        </a>
        
    );
}

Icon.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string
};

export default Icon;