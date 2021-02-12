import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;