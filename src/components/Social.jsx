import React from 'react';
import Icon from './Icon';

function Social() {
    var styles = {
        marginTop: '1em'
    };
    return (
        <div style={styles}>
            <Icon name="instagram" />
            <Icon name="twitter" />
            <Icon name="soundcloud" />
        </div>
    );
}

export default Social;