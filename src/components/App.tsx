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
            <Router history={history}>
                <AppContainer>
                    <Nav/>
                    <Switch>
                        <Route exact path={'/'} component={Dashboard}/>
                    </Switch>
                </AppContainer>
            </Router>
        </>
    );
};

export default App;
