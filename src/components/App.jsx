import React from 'react';
import Landing from './Landing';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';


function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/home' component={Home} />
            </Switch>
        </div>
    );
}

export default App;