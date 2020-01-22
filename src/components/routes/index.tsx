import React from 'react';
import styled from 'styled-components';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from '../../commons';
import Nav from '../common/nav';
import Dashboard from '../dashboard';
import NotFound from '../notfound';
import InDevelopment from '../indev';

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
                <Route exact path={'/chat'} component={InDevelopment}/>
                <Route exact path={'/files'} component={InDevelopment}/>
                <Route exact path={'/mail'} component={InDevelopment}/>
                <Route exact path={'/settings'} component={InDevelopment}/>
                <Route path={'*'} component={NotFound}/>
            </Switch>
        </AppContainer>
    </Router>
);

export default Routes;
