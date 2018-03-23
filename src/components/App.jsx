import React from 'react';
import Landing from './Landing';
import Home from './Home';
import Error404 from './Error404';
import { Route, Switch } from 'react-router-dom';



function App() {
    return (
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/home' component={Home} />
            <Route component={Error404} />
        </Switch>
    );
}

export default App;