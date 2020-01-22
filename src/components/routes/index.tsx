import React from 'react';
import styled from 'styled-components';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from '../../commons';
import Nav from '../common/nav';
import Dashboard from '../dashboard';

const AppContainer = styled.div`
    display: flex;
    min-height: calc(100vh - 6.2rem);
`;

const Routes = () => (
    <Router history={history}>
        <AppContainer>
            <Nav/>
            <Switch>
                <Route exact path={'/'} component={Dashboard}/>
                <Route exact path={'/chat'} component={Dashboard}/>
                <Route exact path={'/files'} component={Dashboard}/>
                <Route exact path={'/mail'} component={Dashboard}/>
                <Route exact path={'/settings'} component={Dashboard}/>
            </Switch>
        </AppContainer>
    </Router>
);

export default Routes;
