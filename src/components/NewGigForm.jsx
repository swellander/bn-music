import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewGigForm(props) {

    function handleNewGigFormSubmission(event) {
        event.preventDefault();
        props.onNewGigFormCompletion();
        props.onNewGigCreation({name: _name.value, location: _location.value, id: v4()});
        _name.value = '';
        _location.value = '';
    }

    let _name = null;
    let _location = null;
    return (
        <div>
            <h1>Tell Us About the Show!</h1>
            <form onSubmit={handleNewGigFormSubmission}>
                <input type="text" name="" id="name" placeholder="Name of Gig" ref={(input) => {_name = input;}}/>
                <input type="text" id="location" placeholder="Gig Location" ref={(input) => {_location = input;}}/>
                <button type="submit">Add Gig</button>
            </form>
        </div>
    );
}

NewGigForm.propTypes = {
    onNewGigFormCompletion: PropTypes.func,
    onNewGigCreation: PropTypes.func
};

export default NewGigForm;