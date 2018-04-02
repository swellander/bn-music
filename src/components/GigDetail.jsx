import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Container from './Container';
import { Link } from 'react-router-dom';


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
            <button onClick={()=> {props.hideGigDetail()}}>Back to Gig List</button>
        </div>
    );
}

GigDetail.propTypes = {
    selectedGig: PropTypes.Object,
    hideGigDetail: PropTypes.func
};

export default GigDetail;