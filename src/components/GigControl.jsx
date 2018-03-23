import React from 'react';
import NewGigForm from './NewGigForm';
import GigList from './GigList';

class GigControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterGigList: []
        };
        this.handleNewGigRequest = this.handleNewGigRequest.bind(this);
        this.handleNewGigFormCompletion = this.handleNewGigFormCompletion.bind(this);
        this.handleNewGigCreation = this.handleNewGigCreation.bind(this);
    }

    handleNewGigRequest() {
        this.setState({formVisibleOnPage: true});
    }

    handleNewGigFormCompletion() {
        this.setState({formVisibleOnPage: false});
    }

    handleNewGigCreation(newGig) {
        let newMasterGigList = this.state.masterGigList.slice();
        newMasterGigList.push(newGig);
        this.setState({masterGigList: newMasterGigList});

    }

    render() {
        let currentlyVisibleComponent = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleComponent = <NewGigForm onNewGigFormCompletion={this.handleNewGigFormCompletion} onNewGigCreation={this.handleNewGigCreation}/>;
        } else {
            currentlyVisibleComponent = <GigList gigList={this.state.masterGigList} onNewGigRequest={this.handleNewGigRequest}/>;
        }
        return (
            <div>
                {currentlyVisibleComponent}
            </div>
        );
    }
}

export default GigControl;