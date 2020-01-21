import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../commons';
import './App.css';

const App = () => {
    return (
        <>
            <Router history={history}>
                <h1>Hey</h1>
                <Switch>

                </Switch>
            </Router>
        </>
    );
};

export default App;
