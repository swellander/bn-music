import React from 'react';
import Landing from './Landing';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Switch>
                <Route expact path="/" component={Landing} />
                <Route path="/home" component={Home} />
            </Switch>
        </div>
    );
}

export default App;