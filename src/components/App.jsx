import React from 'react';
import Landing from './Landing';
import Home from './Home';
import GigControl from './GigControl';
import NewGigForm from './NewGigForm'
import Error404 from './Error404';
import { Route, Switch } from 'react-router-dom';
import { gigListSeed } from './../assets/js/gigListSeed.js';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailVisibleOnPage: false,
            masterGigList: gigListSeed
        };
        this.handleGigDetail = this.handleGigDetail.bind(this);
        this.handleNewGigFormCompletion = this.handleNewGigFormCompletion.bind(this);
        this.handleNewGigCreation = this.handleNewGigCreation.bind(this);
    }

    handleGigDetail() {
        this.setState({detailVisibleOnPage: true});
    }

    handleNewGigFormCompletion() {
        this.setState({detailVisibleOnPage: false});
    }

    handleNewGigCreation(newGig) {
        let newMasterGigList = this.state.masterGigList.slice();
        newMasterGigList.push(newGig);
        this.setState({masterGigList: newMasterGigList});

    }
    render() {
        return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/home' component={Home} />
            <Route path='/gigs' render={()=><GigControl gigList={this.state.masterGigList} detailVisibleOnPage={this.state.detailVisibleOnPage}/>} />
            <Route path='/admin' render={()=><NewGigForm onNewGigFormCompletion={this.handleNewGigFormCompletion} onNewGigCreation={this.handleNewGigCreation}/>} />
            <Route component={Error404} />
        </Switch> 
        )
    };
}

export default App;