import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import MapContainer from './MapContainer';



function GigDetail(props) {
    return (
        <div>
            <Header />
            <h1>{props.selectedGig.name}</h1>
            <hr/>
            <br/>
            <br/>
            <br/>
            <p>{props.selectedGig.description}</p>
            <p>{props.selectedGig.date}</p>
            <p>{props.selectedGig.time}</p>

            <MapContainer />
            <button onClick={()=> {props.hideGigDetail();}}>Back to Gig List</button>
        </div>
    );
}

GigDetail.propTypes = {
    selectedGig: PropTypes.Object,
    hideGigDetail: PropTypes.func
};

export default GigDetail;