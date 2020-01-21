import React from 'react';

import './App.css';

import { Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { history } from '../commons';
import Header from './common/header';
import Nav from './common/nav';
import Dashboard from './dashboard';

const AppContainer = styled.div``;

const App = () => {
    return (
        <>
            <Header/>
            <AppContainer>
                <Nav/>
                <Router history={history}>
                    <Switch>
                        <Route exact path={'/'} component={Dashboard}/>
                    </Switch>
                </Router>
            </AppContainer>
        </>
    );
};

export default App;
