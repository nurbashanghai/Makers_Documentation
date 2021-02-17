import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Register from "./components/Authentication/Register/Register";
import Login from "./components/Authentication/Login/Login";
import BoardTopic from "./components/BoardTopic/BoardTopic";
import TopicToBoardContextProvider from "./contexts/TopicToBoardContext";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/login" component={Login}/>
                <Route exact path="/registration" component={Register}/>
                <Route exact path="/board" component={BoardTopic}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
