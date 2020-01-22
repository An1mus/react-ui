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
    justify-content: flex-end;
    min-height: calc(100vh - 6.2rem);
`;

const ContentContainer = styled.div`
    background-color: var(--main-background-color);
    display: flex;
    justify-content: space-around;
    width: calc(100% - 6.2rem);
`;

const Routes = () => (
    <Router history={history}>
        <AppContainer>
            <Nav/>
            <ContentContainer>
                <Switch>
                    <Route exact path={'/'} component={Dashboard}/>
                    <Route exact path={'/chat'} component={InDevelopment}/>
                    <Route exact path={'/files'} component={InDevelopment}/>
                    <Route exact path={'/mail'} component={InDevelopment}/>
                    <Route exact path={'/settings'} component={InDevelopment}/>
                    <Route path={'*'} component={NotFound}/>
                </Switch>
            </ContentContainer>
        </AppContainer>
    </Router>
);

export default Routes;
