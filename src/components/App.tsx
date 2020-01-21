import React from 'react';
import {Router, Switch} from 'react-router-dom';
import styled from 'styled-components';
import {history} from '../commons';

const AppContainer = styled.div``;

const App = () => {
    return (
        <AppContainer>
            <Router history={history}>
                <h1>Hey</h1>
                <Switch>

                </Switch>
            </Router>
        </AppContainer>
    );
};

export default App;
