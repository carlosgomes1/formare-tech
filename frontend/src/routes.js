import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Chat from './pages/Chat';
import ChatConsultor from './pages/ChatConsultor';
import Desafio from './pages/Desafio';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/chat" exact component={Chat} />
                <Route path="/chatConsultor" exact component={ChatConsultor} />
                <Route path="/desafio" exact component={Desafio} />
            </Switch>
        </BrowserRouter>
    );
}
