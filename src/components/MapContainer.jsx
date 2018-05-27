import React from 'react';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react'; 
// import child component
import PropTypes from 'prop-types';

import Map from './Map';
function MapContainer(props) {
    return (
        <div>
            <Map google={props.google} />
        </div>
    );
}
// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBwhQXUC9clXU_zJPku5_ThXmY52rlrfCM',
})(MapContainer);

MapContainer.propTypes = {
    google: PropTypes.object
};